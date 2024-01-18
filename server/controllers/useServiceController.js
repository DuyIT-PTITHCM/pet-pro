
import { coreResponse } from "../lib/coreResponse.js";
import { cusCheckIn, cusCheckOut, getCheckInByCode } from "../repositories/useServiceRepository.js";

export const index = async (req, res) => {
    try {
        const listCheck = await getCheckInByCode(req);
        coreResponse(res, 200, "Get check in successfully", listCheck);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};
export const checkIn = async (req, res) => {
    try {
        const checkInResult = await cusCheckIn(req);
        coreResponse(res, 200, "Check in successfully", checkInResult);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};
export const checkOut = async (req, res) => {
    try {
        const checkOutResult = await cusCheckOut(req);
        coreResponse(res, 200, "Check out successfully", checkOutResult);
    } catch (error) {
        coreResponse(res, 500, "Error fetching Check" + error.message);
    }
};