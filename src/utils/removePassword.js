const removePassword = (user) => {
  const { password, ...userResponse } = user;
  return userResponse;
};
export default removePassword;
