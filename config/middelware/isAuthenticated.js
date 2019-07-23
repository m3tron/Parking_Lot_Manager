
module.exports = function(req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(200).json({
    redirecturl: "login"
  });
};
  