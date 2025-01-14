const mongoose = require("mongoose");
const config = require("config");
module.exports = () => {
  mongoose
    .connect(config.get("db.address"))
    .then(() => console.log("connected to db"))
    .catch(() => console.log("could'nt connect to db"));
};
