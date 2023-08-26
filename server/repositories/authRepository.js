import bcrypt from 'bcryptjs';
import { models } from '../models/index.js';

export const rigisterUser = async (userData) => {
    try {
        const { name, email, phone, password , avatar } = userData;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await models.User.create({
            name,
            avatar,
            email,
            phone,
            password: hashedPassword,
            role : 'customer'
        });

        const { password: passwordToRemove, ...userWithoutPassword } = newUser.dataValues;

        return userWithoutPassword;
    } catch (error) {
        throw new Error("Error creating user");
    }
};