const sql = require("./db.js");

// constructor
const Alfa = function (alfa) {
  this.id = alfa.id;
  this.id_alfa = alfa.id_alfa;
  this.id_estado = alfa.id_estado;
  this.criterio = alfa.criterio;
  this.orden = alfa.orden;
  this.checked = alfa.checked;

};

const Estados = function (estado) {
  this.id = estado.id,
  this.nombre = estado.nombre
}

Alfa.create = (newAlfa, result) => {
  sql.query(
    "INSERT INTO criteriosdeverificacion SET ?",
    newAlfa,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created criteriosdeverificacion: ", {
        id: res.insertId,
        ...newAlfa,
      });
      result(null, { id: res.insertId, ...newAlfa });
    }
  );
};

Alfa.findById = (id, result) => {
  sql.query(
    `SELECT * FROM criteriosdeverificacion WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found alfa: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Alfa with the id
      result({ kind: "not_found" }, null);
    }
  );
};


Alfa.getAllCriteriosAlfas = (id, result) => {
  sql.query(
    `select criteriosdeverificacion.id, criteriosdeverificacion.id_estado, criteriosdeverificacion.criterio, criteriosdeverificacion.checked, estados.nombre from criteriosdeverificacion, estados
  where criteriosdeverificacion.id_alfa = ${id} and criteriosdeverificacion.id_estado = estados.id`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("criteriosdeverificacion: ", res);
      result(null, res);
    }
  );
};
Alfa.getAllEstadosPorAlfa = (id, result) => {
  sql.query(
    `select id,nombre from estados where id_alfa=${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("estados: ", res);
      result(null, res);
    }
  );
};
Alfa.getAllNameAlfas = (result) => {
  sql.query(
    `select id, nombre from alfas`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("estados: ", res);
      result(null, res);
    }
  );
};




module.exports = Alfa;
