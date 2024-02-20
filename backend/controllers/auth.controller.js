import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { fullName,username,password,gender,confirmPassword} = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {

      const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

      const newUser = await User({
        fullName,
        username,
        password,
        gender,
        avatar: gender === "male" ? boyAvatar : girlAvatar
      })

      await newUser.save();
      // res.status(201).json(newUser);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        avatar: newUser.avatar
      });

    } else {
      return res.status(400).json({ error: "Username already in use", success: false });
      // throw new Error("username already in use");
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const login = (req, res) => {
  res.send("login");
}

export const logout = (req, res) => {
  res.send("logout");
}