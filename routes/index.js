// Show all blogposts
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const database = firebase.firestore();
// Reference specific collection
const blogposts = database.collection("blogposts");

router.get("/", (req, res) => {
  const blogpostsArray = [];

  blogposts
    .get()
    .then((querySnapshot) => {
      console.log("querySnapshot: ", querySnapshot);
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch((error) => {
      console.warn("error: ", error);
      return res.send(error);
    });
});

module.exports = router;
