import { Op } from 'sequelize';
import { models } from '../models/index.js';
import bcrypt from 'bcryptjs';
import { markImageAsUsed } from '../utils/imageUtils.js';

export const getUserIncludePet = async (filterString) => {
    try {
        const users = await models.User.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${filterString}%` } },
                    { email: { [Op.like]: `%${filterString}%` } },
                    { phone: { [Op.like]: `%${filterString}%` } },
                ],
            },
            include: [
                {
                    model: models.Pet,
                    as: 'pets',
                },
            ],
            attributes: { exclude: ['password'] },
        });

        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users");
    }
};

export const createPet = async (req) => {
    let transaction;
    try {
        transaction = await models.sequelize.transaction();
        const { name, breed, furColor, height, length, weight, healthStatus, image, userId } = req.body;
        await markImageAsUsed(image, transaction);
        const pet = await models.Pet.create({ name, breed, furColor, height, length, weight, healthStatus, image, userId });
        await transaction.commit();

        return pet;
    } catch (error) {
        console.log(error)
        throw new Error("Error check in failed: " + error.message);
    }
}

export const updatePet = async (petId, updatedData) => {
    let transaction;
    try {
        // Start a transaction
        transaction = await models.sequelize.transaction();

        // Find the pet by ID
        const pet = await models.Pet.findByPk(petId, { transaction });

        if (!pet) {
            throw new Error("Pet not found");
        }
        const storage = await models.Storage.findOne({ where: { path: pet.image }, transaction });
        if (storage) {
            await storage.destroy({ transaction });
        }
        // Update pet information
        const {
            name,
            breed,
            furColor,
            height,
            length,
            weight,
            healthStatus,
            image
        } = updatedData;
       
        await markImageAsUsed(image, transaction);
        pet.name = name || pet.name;
        pet.breed = breed || pet.breed;
        pet.furColor = furColor || pet.furColor;
        pet.height = height || pet.height;
        pet.length = length || pet.length;
        pet.weight = weight || pet.weight;
        pet.healthStatus = healthStatus || pet.healthStatus;
        pet.image = image || pet.image;

        // Save the changes
        await pet.save({ transaction });

        // Commit the transaction
        await transaction.commit();

        return pet;
    } catch (error) {
        // Rollback the transaction in case of an error
        if (transaction) {
            await transaction.rollback();
        }
        console.log(error);
        throw new Error("Error updating pet: " + error.message);
    }
};

// Service function (update your service functions accordingly)
export const deletePet = async (petId) => {
    let transaction;
    try {
        // Start a transaction
        transaction = await models.sequelize.transaction();

        // Find the pet by ID
        const pet = await models.Pet.findByPk(petId, { transaction });

        if (!pet) {
            throw new Error("Pet not found");
        }
        const storage = await models.Storage.findOne({ where: { path: pet.image }, transaction });
        if (storage) {
            await storage.destroy({ transaction });
        }
        // Delete the pet
        await pet.destroy({ transaction });

        // Commit the transaction
        await transaction.commit();
    } catch (error) {
        // Rollback the transaction in case of an error
        if (transaction) {
            await transaction.rollback();
        }
        console.log(error);
        throw new Error("Error deleting pet: " + error.message);
    }
};
