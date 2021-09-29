const User = require("../users/users-model");
const Post = require("../posts/posts-model");

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.originalUrl}`
  );
  next();
};

async function validateUserId(req, res, next) {
  try {
    const validatedUser = await User.getById(req.params.id);
    if (!validatedUser) {
      res.status(404).json({
        message: "user not found"
      });
    } else {
      req.user = validatedUser;
      next();
    };
  } catch (err) {
    res.status(500).json({
      message: "problem finding user"
    })
  };
};

function validateUser(req, res, next) {
  console.log("validateUser");
  const { name } = req.body;
  if (!name || typeof name !== 'string' || !name.trim()) {
    res.status(400).json({
      message: "missing required name field"
    });
  } else {
    req.name = name.trim();
    next();
  };
};

function validatePost(req, res, next) {
  console.log("validatePost");
  next();
};

module.exports = {
  logger,
  validateUserId,
  validateUser,
};
