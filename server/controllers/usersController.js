// import User from '../models/user.js';

import { models, sequelize } from "../models/index.js";


export const getAllUsers = async (req, res) => {
    console.log( models.User.findAll());
    res.json({ message: await models.User.findAll() });
    //   try {
    //     const users = await User.findAll();
    //     res.status(200).json(users);
    //   } catch (error) {
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
};
