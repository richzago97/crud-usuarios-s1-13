import users from "../../database";
import removePassword from "../../utils/removePassword";
const listProfileService = (userId) => {
  const user = users.find((user) => user.uuid === userId);
  if (user) {
    const newUser = removePassword(user);
    return newUser;
  }
};
export default listProfileService;
