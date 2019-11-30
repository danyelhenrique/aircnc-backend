const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

mongoose.connect(
  "mongodb+srv://danyel:Da-1danyel@cluster0-l8thx.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(routes);
app.listen(3333);
