const Sequelize = require('sequelize');
const config = require('../../helpers/config.js');
const postgresUrl = 'postgres://ojgiieyj:4XVcqnHmI6yJ24gisa07hIOL2XU_x6cw@baasu.db.elephantsql.com:5432/ojgiieyj';


const db = new Sequelize(postgresUrl, {
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch(err => {
    console.log('Unable to connect to the database');
  });

const Users = db.define('users', {
  firebaseId: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  displayName: Sequelize.STRING,
  email: Sequelize.STRING
}, {
  timestamps: false 
});

const UsersLists = db.define('usersLists', {
  itineraryName: Sequelize.STRING
});

UsersLists.belongsTo(Users, {
  foreignKey: 'firebaseId'
});
Users.hasMany(UsersLists, {
  foreignKey: 'firebaseId'
});

// db.sync({force: true});
db.sync();

module.exports = { Users, UsersLists };
