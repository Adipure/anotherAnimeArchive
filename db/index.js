const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env.MYSQL_DATABASE || process.env.LOCALDB_URL)



