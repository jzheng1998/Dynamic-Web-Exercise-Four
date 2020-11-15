const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Routes Import
const indexRoute = require("./routes/index.js");

const firebase = require("firebase");
const firebaseConfig = require("./firebase");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routing in Express
app.use("/", indexRoute);

app.listen(port, () => {
  console.log("Exercise Four is running!");
});
