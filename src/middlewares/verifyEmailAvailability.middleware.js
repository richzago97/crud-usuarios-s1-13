import users from "../database";

const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userEmailArealdyExists = users.find((user) => user.email === email);

  if (userEmailArealdyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }
  next();
};

export default verifyEmailAvailabilityMiddleware;
