const userModel = require("../models/user");

module.exports = {
  get: async (req, res) => {
    try {
      const user = await userModel.find({});
      res.status(200).json({
        status: "Found 😊",
        user,
      });
    } catch (err) {
      res.status(500).json({
        status: "Not Found 😔",
        message: err.message,
      });
    }
  },
  post: async (req, res) => {
    try {
      const user = new userModel(req.body);
       await user.save();
      res.status(201).json({
        status: "Done 😊",
          user
      });
    } catch (err) {
      res.status(500).json({
        status: "Didn't post 😔",
        message: err.message,
      });
    }
  },
  patch: async (req, res) => {
    try {
      const data = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );

      res.status(200).json({
        status: "Updated 😊",
        data
      });
    } catch (err) {
      res.status(500).json({
        status: "Didn't updated 😔",
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: "Deleted  😊",
        data: {},
      });
    } catch (err) {
      res.status(500).json({
        status: "Didn't deleted  😔",
        message: err.message,
      });
    }
  },
};
