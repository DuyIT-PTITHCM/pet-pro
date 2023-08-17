import { coreResponse } from "../lib/coreResponse.js";
import { models } from "../models/index.js";


export const getAllUsers = async (req, res) => {
    try {
        const page = req.query.page || 1; // Trang hiện tại (mặc định là 1 nếu không có)
        const perPage = 20; // Số lượng người dùng trên mỗi trang

        const { docs, pages, total } = await models.User.paginate({
            page,
            paginate: perPage,
            order: [['createdAt', 'DESC']], // Sắp xếp theo thời gian tạo mới nhất
        });

        coreResponse(res, 200, "Success", { docs, pages, total });
    } catch (error) {
        console.error("Error fetching users:", error);
        coreResponse(res, 500, "Error fetching users");
    }
};


export const store = async (req, res) => {
    try {
        const { name, information, email, phone, password, birthDate, gender, emailConfirm, phoneConfirm, role } = req.body;
        const newUser = await models.User.create({
            name,
            information,
            email,
            phone,
            password,
            birthDate,
            gender,
            emailConfirm,
            phoneConfirm,
            role,
        });
        const { password: passwordToRemove, ...userWithoutPassword } = newUser.dataValues;

        coreResponse(res, 201, "User created successfully", userWithoutPassword);
    } catch (error) {
        coreResponse(res, 500, "Error creating user", error);
    }
};