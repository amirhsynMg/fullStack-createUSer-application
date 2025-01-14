const express = require("express");
const app = express();
const router = require("./routes/index");
const cors = require("cors");

app.use(express.json());
// initial database
require("./startup/db")();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors("http://localhost:5173"));

app.use("/api", router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app staret at port: ${PORT}`);
});
