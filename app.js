const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const p = require("./util/path");

const p2 = path.join(
  path.dirname(process.mainModule.filename),
  "data2",
  "products.json"
);
console.log("p2:", p2);

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use(errorController.get404);

app.listen(3000);
