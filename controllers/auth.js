import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
export const register = async (req, res) => {
    try {
        const exit_user = await user.findOne({ email: req.body.email });
        if(exit_user) return res.status(400).json({ message: 'Tài khoản email đã tồn tại' });
        const hass = await bcryptjs.hash(req.body.password,10);
        const User = await user.create({...req.body,password: hass});
        User.password = undefined;
        return res.status(200).json({ message: 'Đăng kí thành công' , User : User
     });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const exit_user = await user.findOne({ email: req.body.email });
        if(!exit_user) return res.status(400).json({ message: 'Tài khoản email chưa tồn tại' });
        const math = bcryptjs.compare(req.body.password,exit_user.password);
        if(!math) return res.status(400).json({ message : ' mk ko đúng "' });
        const token = await jwt.sign({ _id: exit_user._id }, "123456", { expiresIn: "1d" });
        exit_user.password = undefined;
        return res.status(200).json({
            message : " đăng nhập thành công",exit_user, token
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}