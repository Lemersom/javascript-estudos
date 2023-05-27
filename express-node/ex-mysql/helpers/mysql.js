const Sequelize = require("sequelize")

const sequelize = new Sequelize("teste", "site","password",  
{host:  "localhost", dialect:  "mysql"})

sequelize.authenticate()
    .then(() => console.log("Conectado no Mysql!"))
    .catch(error => console.log(error))

module.exports = sequelize