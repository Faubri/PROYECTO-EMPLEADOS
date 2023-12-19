/** Requerir un modulo que se conecte a mongodb, por eso necesitamos a mongoose,
 * debemos decirle a express que se conecte a mongodb por lo que necesitamos un modulo y
 * tambien ssirva para modelar los datos  */

const mongoose = require('mongoose');
//const {catchError} = require("rxjs");
//const {error} = require("@angular/compiler-cli/src/transformers/util");

const URI = 'mongodb://127.0.0.1:27017/empleados';

mongoose.connect(URI)
  .then(db => console.log('DB is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
