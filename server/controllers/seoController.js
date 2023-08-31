import { validationResult } from "express-validator";
import { coreResponse } from "../lib/coreResponse.js";
import { createSeo, getAllSeos, updateSeo, deleteSeo, getSeoById } from "../repositories/seoRepository.js";

export const index = async (req, res) => {
    try {
        const data = await getAllSeos();
        coreResponse(res, 200, "Success", data);
    } catch (error) {
        coreResponse(res, 500, "Error fetching SEOs from controller", error);
    }
};

export const store = async (req, res) => {
    try {
        const seoCreated = await createSeo(req.body);
        coreResponse(res, 201, "SEO created successfully", seoCreated);
    } catch (error) {
        coreResponse(res, 500, "Error creating SEO", error);
    }
};

export const update = async (req, res) => {
    try {
        const seoUpdated = await updateSeo(req.params.id, req.body);
        coreResponse(res, 201, "SEO updated successfully", seoUpdated);
    } catch (error) {
        coreResponse(res, 500, "Error updating SEO", error);
    }
};

export const destroy = async (req, res) => {
    try {
        const seoDeleted = await deleteSeo(req.params.id);
        coreResponse(res, 201, "SEO deleted successfully", seoDeleted);
    } catch (error) {
        coreResponse(res, 500, "Error deleting SEO", error);
    }
};

export const show = async (req, res) => {
    try {
        const seoId = req.params.id;
        const seo = await getSeoById(seoId);

        if (!seo) {
            return coreResponse(res, 404, "SEO not found");
        }

        coreResponse(res, 200, "Success", seo);
    } catch (error) {
        coreResponse(res, 500, "Error fetching SEO from controller", error);
    }
};
