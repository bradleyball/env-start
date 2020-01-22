const db = require("../data/dbConfig");

exports.createOne = (table, returning, object) => {
  return db(table)
    .returning(returning)
    .insert(object);
};

exports.getMany = (table, ...columns) => {
  return db(table).select(columns ? columns : "*");
};

exports.getById = (table, id, ...columns) => {
  return db(table)
    .select(columns ? columns : "*")
    .where("id", id);
};

exports.updateById = (table, object, id) => {
  return db(table)
    .update(object)
    .where("id", id);
};
