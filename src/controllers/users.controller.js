import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listProfileService from "../services/users/listProfile.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;
  const createdUser = await createUserService(email, name, password, isAdm);
  return res.status(201).json(createdUser);
};

const listUserController = (req, res) => {
  const users = listUserService();
  return res.json(users);
};

const deleteUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    deleteUserService(uuid);
    return res.status(200).json({
      message: "User deleted with sucess",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const updateUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, password, email } = req.body;
    const updatedUser = updateUserService(uuid, name, password, email);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const listProfileController = (req, res) => {
  const users = listProfileService(req.userId);
  return res.json(users);
};

export {
  createUserController,
  listUserController,
  deleteUserController,
  updateUserController,
  listProfileController,
};
