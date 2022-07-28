const authentication = require("../models/Auth");

module.exports = {
  get: async (req, res) => {
    console.log("------->", req.body);

    const fetched_user = await authentication.find({});
    console.log("||===>", fetched_user);
    try {
      res.status(200).json({
        status: "Mil  gaya 😊",
        data: {
          fetched_user,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Nahi mila 😔",
        message: err.message,
      });
    }
  },
  post: async (req, res) => {
    console.log("------->", req.body);
    const auth = new authentication(req.body);
    try {
      let l = await auth.save();
      console.log("||->", l);
      res.status(201).json({
        status: "Ho gaya 😊",
        data: {
          auth,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Nahi hua 😔",
        message: err.message,
      });
    }
  },
  patch: async (req, res) => {
    console.log("-----> |||", req.params);
    try {
      const updated_user = await authentication.findByIdAndUpdate(
        req.params.id,
        req.body
      );

      res.status(200).json({
        status: "Ho  gaya 😊",
        data: {
          updated_user,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "Nahi hua 😔",
        message: err.message,
      });
    }
  },
  delete: async (req, res) => {
    console.log("----->", req.body);

    try {
      await authentication.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: "Ho  gaya 😊",
        data: {},
      });
    } catch (err) {
      res.status(500).json({
        status: "Nahi hua 😔",
        message: err.message,
      });
    }
  },
};
