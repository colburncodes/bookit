import User from "../models/user";

// GET: Returns a list of users. => /api/users
const getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Users",
  });
};

// POST: Creat a user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status.json({
      success: false,
      error: error.message,
    });
  }
};

export { getUsers, createUser };
