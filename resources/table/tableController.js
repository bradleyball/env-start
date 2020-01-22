const db = require("../../data/dbConfig");

exports.createTable = async (req, res) => {
  try {
    const data = await db("table")
      .returning("*")
      .insert(req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
  }
};
