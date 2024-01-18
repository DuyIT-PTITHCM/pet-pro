const verifyAdmin = (req, res, next) => {
    if (!req.user || (req.user.role !== 'admin' && req.user.role !== 'employer')) {
        return res.status(403).json({ message: 'Unauthorized: Admin access required' });
    }
    next();
};

export default verifyAdmin;
