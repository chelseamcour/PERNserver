module.exports = (sequelize, DataTypes) => {

    const Log = sequelize.define('log',{
      raceName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raceDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    raceCity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raceState: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raceCountry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raceDistance: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medalRating: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tshirtRating: {
        type: DataTypes.INTEGER,
        allowNull: true

    },
    snacksRating: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    photos: {
          type: DataTypes.TEXT,
          allowNull: true
    }
  })
  return Log;
}