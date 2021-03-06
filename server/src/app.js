const express = require("express");
const mongoose = require("mongoose");
const router = require("../src/api/routes");

const app = express();
const port = process.env.PORT || 3001;

// Connect to and seed database
mongoose.connect("mongodb://localhost:27017/primecondies-test", { useNewUrlParser: true });

// Use the api router for api requests
app.use("/", router);

// Handle errors
app.use((req, res) => {
  res.status(404);
  res.json({ 
    statusCode: "404",
    message: "Resource not found" 
  });
});

app.listen(port, () => {
  console.log(`Prime Condies Started on port ${port}`);
});

module.exports = app;