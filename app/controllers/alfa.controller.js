const Alfa = require("../models/alfa.model.js");

// Create and Save a new Alfa
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Alfa
  const alfa = new Alfa({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Alfa in the database
  Alfa.create(alfa, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Alfa."
      });
    else res.send(data);
  });
};



// find all Alfas
exports.findAllCriteriosPorAlfas = (req, res) => {
  const {id_alfa} = req.body;
  Alfa.getAllCriteriosAlfas(id_alfa,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving alfas."
      });
    else res.send(data);
  });
};

// find all States for Alfas
exports.findAllEstadosPorAlfa = (req, res) => {
  const {id_alfa} = req.body;
  Alfa.getAllEstadosPorAlfa(id_alfa,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving alfas."
      });
    else res.send(data);
  });
};

exports.findAllNameAlfas = (req, res) => {
  Alfa.getAllNameAlfas ((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving alfas."
      });
    else res.send(data);
  });
};



