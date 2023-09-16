const verifyCustomer = (req, res, next) => {
    if (!req.user || req.user.role !== 'customer') {
        return res.status(403).json({ message: 'Unauthorized: Customer access required' });
    }
    next();
};

export default verifyCustomer;
