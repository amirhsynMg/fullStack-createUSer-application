const User = require("../../model/user.module");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (!users)
      return res
        .status(400)
        .json({ message: "user does not exist", data: null });

    return res.status(200).json(users);
  } catch (error) {
    console.log("error inside get user", error.message);
    res.status(400).json({ message: "server Error" });
  }
};

const createUsers = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      avatar: req.body.avatar,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log("error inside create user: ", error.message);
    res.status(400).json({ message: "server Error" });
  }
};

const updateUsers = async (req, res) => {
  try {
    const { first_name, last_name, email, avatar } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        first_name,
        last_name,
        email,
        avatar,
      },
      { new: true }
    );
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "user does not exist" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log("error inside update user route: ", error.message);
    res.status(400).json({ message: "server Error" });
  }
};

const DeleteUsers = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(400).json({ message: "user does not exist" });

    res.status(200).json({ message: "user succesfully deleted", data: user });
  } catch (error) {
    console.log("error inside deleteUser route: ", error.message);
    res.status(404).json({ message: "server Error" });
  }
};

module.exports = { getUsers, createUsers, updateUsers, DeleteUsers };
