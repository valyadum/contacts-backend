// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const app = express();

// // parse application/json
// app.use(express.json());
// // cors
// app.use(cors());
// const routerApi = require('./api');
// app.use('/api', routerApi);
// app.use((_, res, __) => {
//     res.status(404).json({
//         status: 'error',
//         code: 404,
//         message: 'Use api on routes: /api/tasks',
//         data: 'Not found',
//     });
// });
// app.use((err, _, res, __) => {
//     console.log(err.stack);
//     res.status(500).json({
//         status: 'fail',
//         code: 500,
//         message: err.message,
//         data: 'Internal Server Error',
//     });
// });
// const PORT = process.env.PORT || 3000;
// const uriDb = process.env.DB_HOST;
// const connection = mongoose.connect(uriDb, {
//     promiseLibrary: global.Promise,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });
// connection
//     .then(() => {
//         app.listen(PORT, function () {
//             console.log(Server running.Use our API on port: ${ PORT });
//         });
//     })
//     .catch(err =>
//         console.log(Server not running.Error message: ${ err.message }),
//     );




import express from "express";
import mongoose from "mongoose";
import { app } from "./app.js";
import 'dotenv/config';
// import dotenv from "dotenv";
// dotenv.config()
// import { DB_HOST } from "./config.js";
//process.env.DB_HOST - місце знаходження ключа на сервері
//  const DB_HOST = "mongodb+srv://valyadum:10122010Dum@cluster0.0q9ikbl.mongodb.net/db-contacts?retryWrites=true&w=majority"
const { DB_HOST, PORT=3000 } = process.env;
mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT);
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);

    })