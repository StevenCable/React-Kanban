const express = require('express');
const bp = require('body-parser');
const router = express.Router();
const db = require('./models');
const cardRoute = require('./routes/cards');
const CONFIG = require('./config/config.json');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use('/api/kanban/', cardRoute);
app.use(express.static('./public'));


app.listen(PORT, () => {
  db.sequelize.sync();
  console.log('ya shit is up and runnin on port: ', PORT);
});

module.exports = app;