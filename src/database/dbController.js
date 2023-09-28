const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.set('strictQuery', false)
module.exports = ()=> mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Estas en mongodb'))
  .catch((err) => console.log('error de conexion',err))