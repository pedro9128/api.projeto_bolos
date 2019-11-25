const express = require("express");
const router = express.Router();

const bolos = require("../data/bolos");
const fs = require("fs");

router.get("/", (req, res) => {
  res.status(200).json({
    bolos: bolos
  });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  bolos.map((bolo, index) => {
    if (bolo.id === id) {
      return res.status(200).send({
        bolos: bolos[index]
      });
    }
  });
});

router.post("/", (req, res) => {
  res.status(200).send({ message: "success" });
  fs.readFile("./data/bolos.json", function(err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);
    parseJson = parseJson.concat(req.body);
    fs.writeFile("./data/bolos.json", JSON.stringify(parseJson), function(err) {
      if (err) throw err;
    });
  });
});

module.exports = router;
