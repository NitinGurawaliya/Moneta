// backend/index.js
const dotenv = require('dotenv')
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1", rootRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
