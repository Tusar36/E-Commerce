const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const Auth_router = require("./routes/AuthRouter");
const Product_Router = require("./routes/ProductRouter");
const Cart_Router = require("./routes/CartRouter");
const Order_Router = require("./routes/Order_Router");
app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/auth", Auth_router);
app.use("/product", Product_Router);
app.use("/cart", Cart_Router);
app.use("/order", Order_Router);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to mongodb");
  app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
  });
});
