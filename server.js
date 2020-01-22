require("dotenv").config();
const express = require("express");
const server = express();
const tableRoute = require("./resources/table/tableRouter");

//***************************** Middleware  *****************/

server.use(express.json());

//******************* Routers *****************************/

server.use("/api/v1/table", tableRoute);

// ****************** PORT SET UP *************************

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Ayyyyy ${PORT} is up baby!`);
});
