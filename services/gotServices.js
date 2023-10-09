const axios = require("axios");
require("dotenv").config();

const gotService = async () => {
    console.log("Winter is coming");
    return await axios.get(`${process.env.gotURL}`);
};

const gotServiceById = async (id) => {
    console.log("Characters by Id");
    return await axios.get(`${process.env.gotURL}${id}`);
};

module.exports = {
    gotService, 
    gotServiceById,
};