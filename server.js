import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js"

import cors from "cors";

// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
//     next();
//   });

app.use("/api/users", userRoutes);
app.use("/api/employee", employeeRoutes);

const __dirname = path.resolve();

  app.get("/", (req, res) => {
    res.send("API is Running....");
  });

const PORT =  process.env.NODE_ENV || 4323;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//runingin
