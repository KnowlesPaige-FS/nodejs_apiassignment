const express = require("express");
const { gotService, gotServiceById } = require("../services/gotServices");
const charactersRouter = express.Router();

charactersRouter.get("/", (req, res, next) => {
    gotService()
    .then((result) => {
        res.status(200).json(result.data);
    })
    .catch((err) => {
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});


// GET by ID
charactersRouter.get("/:id", (req, res, next) => {
    gotServiceById(req.params.id)
    .then((result) => {
        res.status(200).json(result.data);
    })
    .catch((err) => {
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});

module.exports = charactersRouter;