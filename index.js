import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(express.json());

const connection = mysql
  .createConnection({
    host: "178.16.143.25",
    user: "sama",
    password: "Samanthi1993@",
    database: "royce_world",
  })
  .promise();

await connection
  .query(`select * from Types`)
  .then(([rows]) => {
    console.log(rows);
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
