import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import { models } from '../models/index.js';
import { coreResponse } from '../lib/coreResponse.js';

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        const uploadDir = 'static/images/';
        try {
            const dirStats = await fs.stat(uploadDir);
            if (!dirStats.isDirectory()) {
                await fs.mkdir(uploadDir);
            }
        } catch (error) {
            await fs.mkdir(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueFilename = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueFilename);
    }
});

const upload = multer({ storage });

export const uploadFileAndSaveToDatabase = [
    upload.single('file'),
    async (req, res) => {
        try {
            const { filename, originalname, mimetype, size } = req.file;
            const filePath = path.join('static/images', req.file.filename);
            const newFile = await models.Storage.create({
                name: filename,
                description: originalname,
                type: mimetype,
                size: size,
                path: filePath
            });

            return coreResponse(res,200,"File uploaded and saved successfully",newFile);
        } catch (error) {
            return coreResponse(res,200,"Error uploading file",error);
        }
    }
];
