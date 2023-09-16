import { models } from '../models/index.js';
import fs from 'fs/promises'; 

const folder = 'static';

const dailyJobDeleteImage = async () => {
  console.log('Daily job running at midnight: delete images with isUse = 0.');

  try {
    const imagesToDelete = await models.Storage.findAll({
      where: {
        isUse: 0,
      },
    });

    for (const image of imagesToDelete) {
      const imagePath = folder + image.path;

      try {
        await fs.access(imagePath);
        await fs.unlink(imagePath);

        await image.destroy();
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }

    console.log(`${imagesToDelete.length} images with isUse = 0 deleted.`);
  } catch (error) {
    console.error('Error querying images:', error);
  }
};

export default dailyJobDeleteImage;
