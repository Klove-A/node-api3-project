function logger(req, res, next) {
  console.log(
    ` A ${req.method} request was made to the path ${req.originalUrl} at [${new Date().toISOString()}]`
  );
  next();
};

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
  logger,
}
