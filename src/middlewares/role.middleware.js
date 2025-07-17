const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({ success: false, message: 'Forbidden' });
    }
    next();
  };
};

module.exports = authorize;
