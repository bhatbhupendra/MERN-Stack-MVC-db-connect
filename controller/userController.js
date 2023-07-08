const UserSchema = require("../model/user");

const createUser = async (req, res) => {
  try {
    const { name, college } = req.body;
    const user = await UserSchema.create({ name, college });

    if (user) {
      res.status(201).json({
        success: true,
        message: "User created successfully!",
        user,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
