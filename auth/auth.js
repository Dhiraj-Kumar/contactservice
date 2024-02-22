import jwt from "jsonwebtoken";
function verifyToken(req, res, next) {
  let token = req.headers.authorization;
  let result = jwt.verify(
    token,
    "this is my secret for auth api",
    (err, decode) => {
      return decode !== undefined ? decode : err;
    }
  );
  if (!(result instanceof Error)) {
    next();
  } else {
    res
      .status(401)
      .send({ message: "You are not authorized to access this endpoint" });
  }
}

export default verifyToken;