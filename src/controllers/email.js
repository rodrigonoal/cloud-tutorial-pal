const knex = require("../connection");

const postEmail = async (req, res) => {
  const email = req.body;

  try {
    const posted = await knex("users").insert(email).returning("*");

    if (posted) {
      return res.status(200).json("User email registered.");
    }
    throw error;
  } catch (error) {}
};

const getEmail = async (req, res) => {
  try {
    const got = await knex("users");

    if (got.length === 0) {
      return res.status(404).json("User email list is empty.");
    }

    return res.status(200).json(got);
  } catch (error) {
    return res.status(400).json("Could not get user email list.");
  }
};

const deleteEmail = async (req, res) => {
  const { id } = req.params;

  try {
    const got = await knex("users").where({ id }).first();

    if (!got) {
      return res.status(404).json("User email not found.");
    }

    const deleted = await knex("users").where({ id }).del();

    if (deleted) {
      return res.status(200).json("User email deleted.");
    }
    throw error;
  } catch (error) {
    return res.status(400).json("Could not delete email.");
  }
};

const patchEmail = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const got = await knex("users").where({ id }).first();

    if (!got) {
      return res.status(404).json(`User email not found.`);
    }

    const patched = await knex("users").where({ id }).update({ email });

    if (patched) {
      return res.status(200).json(`User email updated.`);
    }
    throw error;
  } catch (error) {
    return res.status(400).json("Could not update email.");
  }
};

module.exports = {
  postEmail,
  getEmail,
  deleteEmail,
  patchEmail,
};
