const express = require(`express`);
const app = express();
app.use(express.json());
const adminController = require(`../controller/admin.controller`);


app.get("/getall", adminController.getAlladmin);
app.get("/:key", adminController.findadmin);
app.post("/", adminController.addadmin);
app.put("/:id", adminController.updateadmin);
app.delete("/:id", adminController.deleteadmin);


module.exports = app;