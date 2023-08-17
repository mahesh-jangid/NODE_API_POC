import asyncHandler from "express-async-handler";
// import generateToken from "../utils/generateToken.js";
import Employee from "../models/employeeModel.js";

// const authemployee = asyncHandler(async (req, res) => {
//   const { email, mobile } = req.body;

//   const employee = await employee.findOne({ email });

//   if (employee && (await employee.matchmobile(mobile))) {
//     res.json({
//       _id: employee._id,
//       name: employee.name,
//       email: employee.email,
//     //   token: generateToken(employee._id),
//       message: "Login success",
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or mobile");
//   }
// });

// const registeremployee = asyncHandler(async (req, res) => {
//   const { name, email, mobile } = req.body;

//   const employeeExists = await Employee.findOne({ email });
// //   console.log("employeeExists",employeeExists)

//   if (employeeExists) {
//     res.status(400);
//     throw new Error("employee already exists");
//   }

//   const employee = await Employee.create({
//     name,
//     email,
//     mobile,
//   });

//   if (employee) {
//     res.status(201).json({
//       _id: employee._id,
//       name: employee.name,
//       email: employee.email,
//       mobile: employee.mobile
//     //   token: generateToken(employee._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid employee data");
//   }
// });
const adduserdata = asyncHandler(async (req, res) => {
  const userdata = await Employee.create(req.body);
  console.log(userdata);
  res.status(201).json(userdata);
});
const deletedata = asyncHandler(async (req, res) => {
  const data = await UserData.findById(req.params.id);
  if (data) {
    await data.remove();
    res.json({ message: "data Removed" });
  } else {
    res.status(404);
    throw new Error("data not found");
  }
});
const updateemployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    employee.name = req.body.name || employee.name;
    employee.email = req.body.email || employee.email;
    employee.gender = req.body.gender || employee.gender;
    employee.city = req.body.city || employee.city;
    employee.dob = req.body.dob || employee.dob;

    const updatedemployee = await employee.save();
    res.json({
      _id: updatedemployee._id,
      name: updatedemployee.name,
      email: updatedemployee.email,
      gender: updatedemployee.gender,
      city: updatedemployee.city,
      dob: updatedemployee.dob,

    });
  } else {
    res.status(404);
    throw new Error("employee not found");
  }
});

const getemployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

const getemployeeByID = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  console.log("employee",employee)
  if (employee) {
    res.json(employee);
    console.log(employee);
  } else {
    res.status(404);
    throw new Error("employee not found");
  }
});

const deleteemployee = asyncHandler(async (req, res) => {
  console.log("2345",deleteemployee)
  const employee = await Employee.findById(req.params.id);
  console.log("1234",employee)
  if (employee) {
    await employee.remove();
    res.json({ message: "employee removed" });
  } else {
    res.status(404);
    throw new Error("employee not found");
  }
});

export {

  getemployees,
  deleteemployee,
  getemployeeByID,
  updateemployee,
  adduserdata
};
