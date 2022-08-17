const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const morgon = require("morgan");
const cors = require("cors");
const middleware = require("./shared/middleware")
const routers = require("./Router/index");
const App = express();
require("dotenv").config();

const PORT = process.env.PORT||3698;


//dotenv
config();

(async () => {
  //db

  await mongoose.connect(
    process.env.DBURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`database connected with ${process.env.DBURL}`);
    }
  );

  //Minddleware
  App.use(cors());
  App.use(morgon("dev"));
  App.use(express.json({ limit: '200mb' }));
  app.get("/", (req, res) =>
  res.send(`Server Running`)
);
  // App.use(middleware.auth);
  console.log(`middleware initialized successfuly`);

  //Route
  App.use("/auth", routers.authRouter);
  App.use("/UserData1", routers.Userdata);
  console.log(`routers initialized`);

  //port
  App.listen(PORT, console.log(`Server Listening to the port :- ${PORT}`));
})();
