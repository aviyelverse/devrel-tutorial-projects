const client = require("../util/db");
const DB_SCHEMA = process.env.HARPER_INSTANCE_SCHEMA;
const TABLE = "students";

//Get all the student
exports.getAllStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE}`;
    const students = await client.query(qry);
    res.json(students);
  } catch (error) {
    console.error("ERROR while fetching all student " + "Student:", error);
    return res.status(500).json(error);
  }
};

//Get only one student
exports.getOneStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const student = await client.query(qry);
    res.json(student);
  } catch (error) {
    console.error("ERROR while fetching student " + "Student:", error);
    return res.status(500).json(error);
  }
};

//create new student
exports.createOneStudent = async (req, res, next) => {
  try {
    const user = await client.insert({
      table: TABLE,
      records: [
        {
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

//update one student
exports.updateOneStudent = async (req, res, next) => {
  try {
    const updateStudent = await client.update({
      table: TABLE,
      records: [
        {
          id: req.params.id,
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });

    res.json(updateStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete one student
exports.deleteOneStudent = async (req, res, next) => {
  try {
    const qry = `DELETE FROM ${DB_SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const deleteStudent = await client.query(qry);
    res.json(deleteStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};
