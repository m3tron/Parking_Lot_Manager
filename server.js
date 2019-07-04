const express = require("express");
const db = require("./models");
const passport = require("./config/passportConfig");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);
//auth routes
app.use("/auth", require("./routes/auth-routes"));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
