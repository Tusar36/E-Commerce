const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const Auth_router = require("./routes/AuthRouter");
app.use(express.json());
dotenv.config();

app.use("/auth", Auth_router);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to mongodb");
  app.listen(process.env.PORT, () => {
    console.log("Server is running");
  });
});
