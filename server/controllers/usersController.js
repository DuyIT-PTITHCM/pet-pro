// import User from '../models/user.js';

import { models} from "../models/index.js";


export const getAllUsers = async (req, res) => {
    res.json({ message: await models.User.findAll() });
};
