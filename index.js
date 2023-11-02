import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
