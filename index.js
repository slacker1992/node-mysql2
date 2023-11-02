import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "Royceworld2023@",
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

app.use("/", (req, res) => {
  res.send("working");
});
app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
