const jwt = require('jsonwebtoken')
const jwtVerifier = async (req, res, next) => {
  const token = req.headers["auth"];
  if (!token) {
    return res.status(401).json({
      message: "Please provide an authorization token",
    });
  }
  await jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userID = decoded;
    next();
  });
};

module.exports = jwtVerifier;
