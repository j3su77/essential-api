module.exports = app => {
  const alfas = require("../controllers/alfa.controller.js");

  var router = require("express").Router();

  // Create a new Alfa
  router.post("/", alfas.create);

  // Retrieve all Alfas
  router.get("/criterios", alfas.findAllCriteriosPorAlfas);


  // Retrieve all states for alfas
  router.get("/estados", alfas.findAllEstadosPorAlfa);


 // Retrieve all names of alfas
  router.get("/name-alfas", alfas.findAllNameAlfas);





  app.use('/api', router);
};
