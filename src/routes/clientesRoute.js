const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

router.post("/", controller.postCliente);

module.exports = router;