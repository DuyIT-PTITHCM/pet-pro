export const coreResponse = (res, status, message, data = null) => {
    const response = {
        message,
        data
    };

    return res.status(status).json(response);
};
