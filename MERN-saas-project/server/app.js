const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// app config
app.use(cors());
app.use(express.json());

// port and DB config
const DATABASE_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

// mongoose connection
mongoose
  .connect(DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error));

// routers
const calorie = require("./routes/calorie.routes.js");
const users = require("./routes/users.routes.js");

app.use("/calorie", calorie);
app.use("/users", users);
