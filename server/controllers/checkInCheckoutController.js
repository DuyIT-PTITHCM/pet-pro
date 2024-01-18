
import { coreResponse } from "../lib/coreResponse.js";
import { checkIn, checkOut, getListCheck } from "../repositories/checkInOutRepository.js";

export const index = async (req, res) => {
    try {
        const listCheck = await getListCheck();
        coreResponse(res, 200, "Get list check successfully", listCheck);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};
export const checkPetIn = async (req, res) => {
    try {
        const checkInResult = await checkIn(req);
        coreResponse(res, 200, "Check in successfully", checkInResult);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};
export const checkPetOut = async (req, res) => {
    try {
        const checkOutResult = await checkOut(req);
        coreResponse(res, 200, "Check in successfully", checkOutResult);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};