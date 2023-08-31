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
    const { metaTitle, metaDescription, keywords, canonicalUrl, robotMetaTags, openGraphTags, structuredData, sitemapPriority, sitemapFrequency, sitemapLastModified, referenceId, reference } = seoData;

    let transaction;
    try {
        transaction = await models.sequelize.transaction();

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
        }, { transaction });
        switch (reference) {
            case 'product':
                let product = await models.Product.findByPk(referenceId);
                product.seoId = newSeo.id;
                await product.save({ transaction });
                break;
            case 'menu':
                let menu = await models.Menu.findByPk(referenceId);
                menu.seoId = newSeo.id;
                await menu.save({ transaction });
                break;
            case 'categories':
                let category = await models.Categories.findByPk(referenceId);
                category.seoId = newSeo.id;
                await category.save({ transaction });
                break;
            case 'article':

                break;

            case 'service':

                break;

            default:
                break;
        }
        await transaction.commit();
        return newSeo;
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
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

export const getSeoById = async (seoId) => {
    try {
        const seo = await models.Seo.findByPk(seoId);
        return seo;
    } catch (error) {
        throw new Error("Error fetching SEO by ID");
    }
};
// Add more repository functions as needed
