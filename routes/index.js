const express = require("express");
const router = express.Router();

const bolos = require("../data/bolos");

router.get("/", (req, res) => {
  res.status(200).json({
    bolos: bolos
  });
});

router.get("/:id", (req, res) => {
  var id = req.params["id"];
  bolos.map((bolo, index) => {
    if (bolo.id === id) {
      return res.status(200).send({
        bolos: bolos[index]
      });
    }
  });
});

module.exports = router;
