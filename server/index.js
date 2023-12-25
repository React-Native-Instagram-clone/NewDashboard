require("dotenv").config();
const routes = require("./routes/routes");

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(
  "mongodb+srv://instagram108drg:instagram108drg@cluster0.wagrhpx.mongodb.net/?retryWrites=true&w=majority"
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
