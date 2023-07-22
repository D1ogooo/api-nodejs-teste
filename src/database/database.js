const mongoose = require('mongoose');
mongoose.Promise = global.Promise

main().catch(error => console.log(error));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/noderest');
  try {
    console.log("Conexão estabelicida com o banco de dados MongoDB")
  } catch (error) {
    console.log("Falha ao estabelecer conexão com o banco de dados")
  }
}

module.exports = mongoose