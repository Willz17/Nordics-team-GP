require("dotenv").config();
require("process").env;

const express = require("express");

const products_router = require("./routes/products-router");
const user_router = require("./routes/user-router");

const PORT = process.env.PORT || 80;
const app = express();
app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// 'api/products'
app.use("/api/products", products_router);

// "api/users"
app.use("/api/users", user_router);

app.use("/api/test", (req, res) => res.send("test"));

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message } || "An Unknown error occured");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}/`);
});
