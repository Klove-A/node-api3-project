function logger(req, res, next) {
  console.log(
    ` A ${req.method} request was made to the path ${req.originalUrl} at [${new Date().toISOString()}]`
  );
  next();
};

function validateUserId(req, res, next) {
  console.log("validateUserId");
  next();
};

function validateUser(req, res, next) {
  console.log("validateUser");
  next();
};

function validatePost(req, res, next) {
  console.log("validatePost");
  next();
};

module.exports = {
  logger,
  validateUserId,
};
