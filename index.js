const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();

/**
 * Initia Config
 */
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
