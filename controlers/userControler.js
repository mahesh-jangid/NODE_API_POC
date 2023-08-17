import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: "Login success",
    });
  } else {
    res.status(401).json({message:"Invalid email or password"});
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password ,address} = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({message:"User already exists"});
  }

  const user = await User.create({
    name,
    email,
    password,
    address
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address,
      token: generateToken(user._id),
      message: "Register success",
    });
  } else {
    res.status(400).json({message:"Invalid user data"});
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserByID = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
    console.log(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  console.log("2345",deleteUser)
  const user = await User.findById(req.params.id);
  console.log("1234",user)
  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
