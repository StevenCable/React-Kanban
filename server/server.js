const express = require('express');
const bp = require('body-parser');
const router = express.Router();
const db = require('./models');
const cardRoute = require('./routes/cards.js');
// // const methodOverride = require('method-override');
// // const isAuth = require('./public/js/isAuth');
// // const setUser = require('./public/js/setUser');
// // const isAdmin = require('./public/js/isAdmin');
// // const User = db.User;
const CONFIG = require('./config/config.json');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const app = express();
// const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 8080;

app.use('/api/kanban/todo', cardRoute);

app.get('/', (req, res) =>{
  res.send('sanity check muh fuqqa');
});


app.listen(PORT, () => {
  db.sequelize.sync();
  console.log('ya shit is up and runnin on port: ', PORT);
});

module.exports = app;