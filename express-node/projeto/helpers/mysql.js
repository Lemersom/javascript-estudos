const Sequelize = require("sequelize")

const sequelize = new Sequelize("name", "user", "password", {host: "localhost", dialect: "mysql"})

sequelize.authenticate()
    .then(() => console.log("Conectado ao Mysql"))
    .catch(error => console.log(error))

module.exports = sequelize