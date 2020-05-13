const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err));

User = sequelize.import('./models/user');
Log = sequelize.import('./models/log');

// Race.belongsTo(User);
// User.hasMany(Race);

// Race.hasOne(Loot);
// Loot.belongsTo(Race);

module.exports = sequelize;