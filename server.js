require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.API_PORT;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes

// 404
app.get("*", (req, res) => {
  res.status(404).send({code: 404,
    message: `La ruta no existe!`,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
