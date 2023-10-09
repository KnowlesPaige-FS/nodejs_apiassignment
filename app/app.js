const express = require("express");
const charactersRouter = require("../router/charactersRouter");
const app = express();

// app.use(express.json());

// http:localhost:3002
app.get("/", (req, res) => {
    res.status(200).json({message: "Service is up"});
});

// router middleware
app.use("/characters", charactersRouter);

// app middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

module.exports = app;