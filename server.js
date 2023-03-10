const routes = require('./controllers');
const mysql = require('mysql2');
const express = require("express");
const path = require('path');
const helpers = require('./utils/helpers');
const handlebars = require('express-handlebars');

//session limits idle time on site
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const Sequelize = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const hbs = handlebars.create({ helpers });

const sess = {
  secret: 'Ruh roh!',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: Sequelize,
  }),
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });