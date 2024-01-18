const verifyCustomer = (req, res, next) => {
    if (!req.user || req.user.role !== 'employer') {
        return res.status(403).json({ message: 'Unauthorized: employer access required' });
    }
    next();
};

export default verifyCustomer;
