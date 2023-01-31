const mongoose = require("mongoose");
const { database, option } = require("../config/index");
module.exports = () => {
    try {
        mongoose.connect(database, option);
        console.log("Database is running");
    } catch (error) {
        console.log("Bazada xatolik mavjud", error.message);
    }
};
