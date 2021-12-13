exports.getAppInfo = (req, res, next) => {
  return res.status(200).json({ "Aviyel CRUD API Testing": "v1.0.0" });
};
