const db = require("../../data/dbConfig");

exports.createTable = async (req, res) => {
  try {
    const [id] = await db("table")
      .returning("*")
      .insert(req.body);
    res.json(id);
  } catch (err) {
    console.error(err);
  }
};
