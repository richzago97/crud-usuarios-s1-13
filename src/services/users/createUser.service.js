import users from "../../database";

import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    isAdm,
    uuid: uuidv4(),
    createdOn: new Date(Date.now()),
    updatedOn: new Date(Date.now()),
  };

  users.push({ ...newUser, password: hashedPassword });
  return newUser;
};
export default createUserService;
