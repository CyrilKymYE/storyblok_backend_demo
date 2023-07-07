// Add Express
const express = require("express");
const cors = require("cors");
// Initialize Express
const app = express();

app.use(require('body-parser').urlencoded({ extended: false }));
//Enable Cors
app.use(cors());

const products = require('./routes/products')
const forms = require('./routes/forms')
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/api/products", products);
app.use("/api/forms", forms);

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app