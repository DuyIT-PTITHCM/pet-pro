import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(); 

const SECRET_KEY = process.env.SECRET_KEY;
export const createJWTToken = (userId, expiresIn = '1h') => {
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn });
    return token;
};

export const verifyJWTToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded.userId;
    } catch (error) {
        return null;
    }
};