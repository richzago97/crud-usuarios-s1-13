import jwt from "jsonwebtoken";

const ensureAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.email = decoded.email;
    req.userId = decoded.sub;
  });
  next();
};
export default ensureAuthMiddleware;
