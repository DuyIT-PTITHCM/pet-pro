// routes/checkinCheckoutRoute.js
import { Op } from 'sequelize';
import { models } from '../models/index.js';
import { markImageAsUsed } from '../utils/imageUtils.js';

export const getListCheck = async() =>{
    const checkinCheckouts = await models.CheckInCheckOut.findAll({
        order: [['isCheckout', 'ASC']],
      });
    return checkinCheckouts;    
}
// API checkin
export const checkIn = async (req) => {
    let transaction;
    try {
        const { name, address, email, phone, breed, furColor, height, length, weight, healthStatus, image, checkinImage, serviceId } = req.body;

        // Tính toán tổng tiền từ bảng dịch vụ
        const service = await models.Categories.findByPk(serviceId);
        //const totalPrice = service.price; // Thay thế bằng logic tính tổng tiền từ các dịch vụ
        const totalPrice = 10;
        // Tạo bản ghi checkin
        const checkinData = {
            name,
            address,
            email,
            phone,
            breed,
            furColor,
            height,
            length,
            weight,
            healthStatus,
            image,
            checkinImage,
            serviceId,
            totalPrice,
            checkinStatus: 'checked',
        };
        console.log(checkinData)
        transaction = await models.sequelize.transaction();
        await markImageAsUsed(checkinData.checkinImage, transaction);
        const checkinRecord = await models.CheckInCheckOut.create(checkinData, { transaction });
        await transaction.commit();

        return checkinRecord;
    } catch (error) {
        console.log(error)
        throw new Error("Error check in failed: " + error.message);
    }

}
export const checkOut = async (req) => {
    let transaction;
    try {
        const { checkoutImage, checkoutStatus } = req.body;
        const { id } = req.params;
        // Kiểm tra xem id có tồn tại không
        const checkinRecord = await models.CheckInCheckOut.findByPk(id);

        if (!checkinRecord) {
            return res.status(404).json({ error: 'Checkin record not found' });
        }
        // Update thông tin checkout
        const checkoutData = {
            checkoutImage,
            checkoutTime: new Date(),
            checkoutStatus,
            isCheckout: true,
        };
        transaction = await models.sequelize.transaction();

        await markImageAsUsed(checkoutImage, transaction);
        const checkoutResult = await checkinRecord.update(checkoutData, { transaction });
        await transaction.commit();
        return checkoutResult;
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}