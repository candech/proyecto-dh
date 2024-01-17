const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const userModel = {
  file: "./data/users.json",
 
  findByPk: function (id){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound;
  },
  getData: function () {
    return JSON.parse(readFileSync(this.file, "utf-8")); 
  },
findAll: function () {
    return this.getData();
  },
findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },
};
module.exports = userModel;