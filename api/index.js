const express = require("express");
const app = express();
const router = require("./src/routes/index");
const cors = require("cors");

app.use(express.json());
// initial database
require("./startup/db")();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app staret at port: ${PORT}`);
});
