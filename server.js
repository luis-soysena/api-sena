require("dotenv").config();
require("./database");

const express = require("express");
const app = express();
const cors = require("cors");
const apiKeyMiddleware = require("./middlewares/apiKey.middleware");

const { API_PORT, API_PATH } = process.env;
const port = API_PORT || 5007;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Check API Key
app.use(apiKeyMiddleware.check);

// User routes
const userRoutes = require("./routes/user.routes");
app.use(`${API_PATH}/user`, userRoutes);

// Subscription routes
const subscriptionRoutes = require("./routes/subscription.routes");
app.use(`${API_PATH}/subscription`, subscriptionRoutes);

// 404 Error
app.get("*", (req, res) => {
  res.status(404).send({
    code: 404,
    message: `This route doesn't exist!`,
  });
});

// Listen server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
