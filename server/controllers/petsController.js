import { coreResponse } from "../lib/coreResponse.js";
import {getUserIncludePet,  createPet, deletePet, updatePet } from "../repositories/petRepository.js";

export const index = async (req, res) => {
    try {
        const searchKey = req.query.searchKey;

        const data = await getUserIncludePet(searchKey);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, error.message);
    }
};
export const create = async (req, res) => {
    try {
        const data = await createPet(req);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, error.message);
    }
};

export const update = async (req, res) => {
    try {
        const petId = req.params.id;
        const updatedData = req.body;
        console.log("update nè" + petId)

        const data = await updatePet(petId, updatedData);
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, error.message);
    }
};
export const remove = async (req, res) => {
    try {
        const petId = req.params.id; // Assuming the petId is passed as a parameter in the request

        await deletePet(petId);

        coreResponse(res, 200, "Pet deleted successfully");
    } catch (error) {
        coreResponse(res, 500, error.message);
    }
};
