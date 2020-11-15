// Show a blogpost
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const database = firebase.firestore();
// Reference specific collection
const blogposts = database.collection("blogposts");

router.get("/", (req, res) => res.send("No ID provided."));

router.get("/:id", (req, res) => {
  const queryId = req.params.id;
  blogposts
    .doc(queryId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.send(doc.data());
      } else {
        return res.send("No document with the provided ID exists.");
      }
    })
    .catch((error) => {
      return res.send(error);
    });
});

module.exports = router;
