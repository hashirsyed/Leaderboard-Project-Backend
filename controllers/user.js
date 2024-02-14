const { Users } = require("../models");
const { generateErrorInstance } = require("../utils");
module.exports = {
  create: async function (req, res) {
    try {
      const { name, description, points, imageUrl } = req.body;
      if (!name && !description && !points && !imageUrl) {
        throw generateErrorInstance({
          status: 404,
          message: "Required fields cannot be empty",
        });
      }
      const user = await Users.create({
        name,
        description,
        points,
        imageUrl,
      });
      res.status(201).send(user);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message || "Something went wrong!");
    }
  },
  get: async function (req, res) {
    try {
      const users = await Users.findAll({
        order : [['points','DESC']]
        
        
      });
      res.status(201).send(users);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message || "Something went wrong!");
    }
  },
  delete: async function (req, res) {
    try {
      let { id } = req.params;
      id = Number(id);
      await Users.destroy({
        where : {
          id
        }
      })
      res.status(200).send("User is deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message || "Something went wrong!");
    }
  },
};
