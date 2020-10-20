const express = require("express");

const app = express();
const port = 4000;

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

// Server Static Files
app.use("/static", express.static("public"));

// Routing in Express
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log("Exercise Three is running!");
});
