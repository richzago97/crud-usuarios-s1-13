import users from "../database";

const isAdminMiddleware = (req, res, next) => {
   const email = req.email;
   const user = users.find((user) => user.email === email);

   if (!user) {
      return res.status(401).json({
         message: "Unauthorized",
      });
   }

   const { uuid } = req.params;

   if (user.isAdm === false && user.uuid != uuid) {
      return res.status(401).json({
         message: "Unauthorized",
      });
   }

   next();
};

export default isAdminMiddleware;
