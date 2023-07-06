// Add Express
const express = require("express");
// Initialize Express
const app = express();
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