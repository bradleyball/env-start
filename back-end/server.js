require("dotenv").config();
const server = require("express")();
const tableRoute = require("./resources/table/tableRouter");

//******************* Routers *****************************/

server.use("/api/v1/table", tableRoute);

// ****************** PORT SET UP *************************

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Ayyyyy ${PORT} is up baby!`);
});
