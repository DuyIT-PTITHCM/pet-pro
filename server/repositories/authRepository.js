import bcrypt from 'bcryptjs';
import { models } from '../models/index.js';

export const rigisterUser = async (userData) => {
    const { name, email, phone, password, avatar } = userData;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let transaction;

    try {
        transaction = await models.sequelize.transaction();

        const storage = await models.Storage.findOne({ where: { path: avatar }, transaction });
        if (storage) {
            storage.isUse = true;
            await storage.save({ transaction });
        }

        const newUser = await models.User.create({
            name,
            avatar,
            email,
            phone,
            password: hashedPassword,
            role: 'customer'
        }, { transaction });

        await transaction.commit();

        const { password: passwordToRemove, ...userWithoutPassword } = newUser.dataValues;

        return userWithoutPassword;
    } catch (error) {
        console.log(error);
        if (transaction) {
            await transaction.rollback();
        }
        throw new Error("Error creating user");
    }
};