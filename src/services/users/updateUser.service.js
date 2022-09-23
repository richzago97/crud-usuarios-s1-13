import users from "../../database";
import removePassword from "../../utils/removePassword";

const updateUserService = (uuid, name, password, email) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);
  const user = users[userIndex];
  const userUpdate = {
    uuid,
    name: name ? name : user.name,
    password: password ? password : user.password,
    email: email ? email : user.email,
    updatedAt: new Date(),
  };

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users[userIndex] = { ...users[userIndex], ...userUpdate };
  const newUser = removePassword(users[userIndex]);
  return newUser;
};

export default updateUserService;
