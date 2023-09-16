import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { showDetail } from '../repositories/userRepository.js';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const [bearer, token] = authHeader?.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userId = decoded.userId;

        req.user = await showDetail(userId);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyToken;
