const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const routes = require("./Routes/routes");

const app = express();
const port = 3001;
routes(app);
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
