import { Op } from 'sequelize';
import { models } from '../models/index.js';

export const getAllSeos = async () => {
    try {
        const data = await models.Seo.findAll();
        return data;
    } catch (error) {
        throw new Error("Error fetching SEOs");
    }
};

export const createSeo = async (seoData) => {
    const { metaTitle, metaDescription, keywords, canonicalUrl, robotMetaTags, openGraphTags, structuredData, sitemapPriority, sitemapFrequency, sitemapLastModified } = seoData;

    try {
        const newSeo = await models.Seo.create({
            metaTitle,
            metaDescription,
            keywords,
            canonicalUrl,
            robotMetaTags,
            openGraphTags,
            structuredData,
            sitemapPriority,
            sitemapFrequency,
            sitemapLastModified
        });
        return newSeo;
    } catch (error) {
        throw new Error("Error creating SEO");
    }
};

export const updateSeo = async (seoId, seoData) => {
    try {
        const [updatedRowsCount, [updatedSeo]] = await models.Seo.update(seoData, {
            where: { id: seoId },
            returning: true,
        });

        if (updatedRowsCount === 0) {
            throw new Error('SEO not found');
        }

        return updatedSeo;
    } catch (error) {
        throw new Error("Error updating SEO");
    }
};

export const deleteSeo = async (seoId) => {
    try {
        const seo = await models.Seo.findByPk(seoId);
        if (!seo) {
            throw new Error('SEO not found');
        }
        await seo.destroy();
        return seo;
    } catch (error) {
        throw new Error("Error deleting SEO");
    }
};

export const isUniqueMetaTitle = async (metaTitle) => {
    const seo = await models.Seo.findOne({ where: { metaTitle } });
    if (seo) {
        return Promise.reject("Meta title already exists");
    }
    return Promise.resolve();
};

// Add more repository functions as needed
