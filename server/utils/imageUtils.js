import { models } from '../models/index.js';

export const markImageAsUsed = async (imagePath, transaction) => {
    try {
        const storage = await models.Storage.findOne({ where: { path: imagePath }, transaction });
        if (storage) {
            storage.isUse = true;
            await storage.save({ transaction });
        }
    } catch (error) {
        console.error('Error marking image as used:', error);
    }
};


export const markImagesListAsUsed = async (imagePathsJson, transaction) => {
    const imagePaths = JSON.parse(imagePathsJson);
    console.log(imagePaths);
    try {
        const [numUpdated] = await models.Storage.update(
            { isUse: true },
            { where: { path: imagePaths }, transaction }
        );

        console.log(`${numUpdated} images marked as used.`);
    } catch (error) {
        console.error('Error marking images as used:', error);
    }
};

