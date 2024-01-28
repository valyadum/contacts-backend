import express from "express";
import morgan from "morgan";
import cors from "cors";
// import mongoose from "mongoose";
import contactsRouter from "./routes/contactsRouter.js";

// const DB_HOST ="mongodb+srv://valyadum:10122010Dum@cluster0.0q9ikbl.mongodb.net/db-contacts?retryWrites=true&w=majority"
// mongoose.connect(DB_HOST)
//   .then(() => {
//     app.listen(3000);
//     console.log("Database connection successful");
//   })
//   .catch((err) => {
//     console.log(err.message);
//     process.exit(1);

//   })



export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// app.listen(3000, () => {
//   console.log("Server is running. Use our API on port: 3000");
// });

// *****************

// const express = require('express');
// const router = express.Router();
// const ctrlTask = require('../controller');

// router.get('/tasks', ctrlTask.get);
// router.get('/tasks/:id', ctrlTask.getById);
// router.post('/tasks', ctrlTask.create);
// router.put('/tasks/:id', ctrlTask.update);
// router.patch('/tasks/:id/status', ctrlTask.updateStatus);
// router.delete('/tasks/:id', ctrlTask.remove);
// module.exports = router;