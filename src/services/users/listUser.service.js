import users from "../../database";
import removePassword from "../../utils/removePassword";

const listUserService = () => {
  const usersResponse = users.map((user) => {
    const newUser = removePassword(user);
    return newUser;
  });
  return usersResponse;
};

export default listUserService;
