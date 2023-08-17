import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", employeeSchema);
export default Employee;
