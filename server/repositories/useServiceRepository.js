// routes/checkinCheckoutRoute.js
import { Op } from 'sequelize';
import { models } from '../models/index.js';
import { markImageAsUsed } from '../utils/imageUtils.js';
import { generateRandomCode } from '../utils/ramdomCode.js';

export const getCheckInByCode = async (req) => {
    try {
        const { code } = req.params;
        const checkInData = await models.UseService.findOne({
            where: {
                code: code,
            },
            include: [{
                model: models.Pet,
                as: 'pet',
              }],
        });

        return checkInData;
    } catch (error) {
        throw new Error("Error fetching users");
    }
};
// API checkin
export const cusCheckIn = async (req) => {
    let transaction;
    try {
        const {
            petId,
            checkinImage,
            checkinStatus,
            serviceId,
            totalPrice,
          } = req.body;
        const code = generateRandomCode(6);
        transaction = await models.sequelize.transaction();
        await markImageAsUsed(checkinImage, transaction);
        
        const checkinRecord = await models.UseService.create({
            petId,
            code,
            checkinImage,
            checkinStatus,
            serviceId,
            totalPrice,
          }, { transaction });
        await transaction.commit();

        return checkinRecord;
    } catch (error) {
        console.log(error)
        throw new Error("Error check in failed: " + error.message);
    }

}

// API checkOut
export const cusCheckOut = async (req) => {
    let transaction;
    try {
        const { checkoutImage, checkoutStatus, checkoutReceiver, checkoutPhone } = req.body;
        const { id } = req.params;
        // Kiểm tra xem id có tồn tại không
        const checkinRecord = await models.UseService.findByPk(id);

        if (!checkinRecord) {
            return res.status(404).json({ error: 'Checkin record not found' });
        }
        // Update thông tin checkout
        const checkoutData = {
            checkoutImage,
            checkoutTime: new Date(),
            checkoutStatus,
            checkoutReceiver, 
            checkoutPhone,
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