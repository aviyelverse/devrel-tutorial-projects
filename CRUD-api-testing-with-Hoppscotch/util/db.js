const harperive = require("harperive");

const configuration = {
  harperHost: process.env.HARPER_HOST_INSTANCE_URL,
  username: process.env.HARPER_INSTANCE_USERNAME,
  password: process.env.HARPER_INSTANCE_PASSWORD,
  schema: process.env.HARPER_INSTANCE_SCHEMA,
};

const db = new harperive.Client(configuration);

module.exports = db;
