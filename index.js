const express = require("express");
const app = express();
const PORT = 1927;
const cors = require("cors");
app.use(cors());

const login = require("./routes/auth.route");
app.use("/login", login);

const adminRoute = require("./routes/admin.routes");
app.use("/admin", adminRoute);

// const coffeRoute = require("./routes/coffe.route");
// app.use("/coffe", coffeRoute);

const jasaRoute = require("./routes/jasa.routes");
app.use("/jasa", jasaRoute);

app.listen(PORT, () => {
  console.log(`Server of Cleanfy runs on port ${PORT}`);
});