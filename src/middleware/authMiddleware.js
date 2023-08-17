const authMiddleware = (req, res, next) => {
    if (req.user) {
        req.userId = req.user._id;
    }
    next();
};

module.exports = authMiddleware;