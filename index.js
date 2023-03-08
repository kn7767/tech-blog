var session = require('express-session');
var mysql = require('mysql2;');
var express = require("express");
var Sequelize = require("sequelize");
var bcrypt = require('bcrypt');
var session = require("express-session");
var SequelizeStore = require("connect-session-sequelize")(session.Store);
