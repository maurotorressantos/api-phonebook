const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();

// this has to be the last loaded middleware, also all the routes should be registered before this!

/**
 * Initia Config
 */
app.use(express.static("dist"));
app.use(cors());
app.use(express.json());
app.use("/", routes);
/**
 * Constants
 */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
