const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


//register
exports.register = async (req, res) => {
    try {

        const { fullname, email, password, role } = req.body
        const userExists = await User.findOne({ email: email.toLowerCase() })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }
        const normalizedEmail = email.toLowerCase()
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            fullname, 
            email: normalizedEmail, 
            password: hashPassword, 
            role:"user"
        })
          res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
// login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        // generate token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,   // add this in .env
            { expiresIn: "1d" }
        );

        // success response
        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};
//logout
exports.logout=(req,res)=>{
    req.session.destroy(()=>{
        res.clearCookie("connect.sid")
        res.json({message:"Logout"})
    })
}