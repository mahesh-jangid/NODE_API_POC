import express from "express";
const router = express.Router();
import {
  getemployees,
  deleteemployee,
  getemployeeByID,
  updateemployee,
  adduserdata,
} from "../controlers/employeeControler.js";
// import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(adduserdata).get(getemployees);

// router.post("/login", authemployee);



router
  .route("/:id")
  .delete(deleteemployee)
  .get(getemployeeByID)
  .put(updateemployee);

export default router;
