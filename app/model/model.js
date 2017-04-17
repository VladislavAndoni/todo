var pg = require("pg");
var Sequelize = require("sequelize");

var db = new Sequelize("todoDB", "postgres","31303",{
    dialect: "postgres"
});

var User = db.define("user",{
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    birthDay: Sequelize.DATE,
    boss_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: true
    }
});
var Task = db.define("task",{
    task_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    deadline: Sequelize.DATE,
    owner_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
});

exports.User = User;
exports.Task = Task;