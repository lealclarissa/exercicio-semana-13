const clientes = require("../models/clientes");

const postCliente = (req, res) => {
  console.log(req.body);

  let cliente = new clientes(req.body);

  cliente.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res
      .status(201)
      .send({ status: true, message: "Cliente cadastrado com sucesso" });
  });
};

const getAll = (req, res) => {
  console.log(req.url);
  clientes.find(function (err, clientes) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res.status(200).send(clientes);
  });
};

module.exports = { postCliente, getAll };