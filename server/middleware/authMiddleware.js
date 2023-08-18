import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import { coreResponse } from '../lib/coreResponse';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const [bearer, token] = authHeader.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return coreResponse(res, 401, 'Invalid token');
    }
};

export default verifyToken;
