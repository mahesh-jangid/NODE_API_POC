import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from "../controlers/userControler.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, getUsers);

router.route("/login").post(authUser);



router
  .route("/:id")
  .delete(deleteUser)
  .get(getUserByID)
  .put(updateUser);

export default router;
