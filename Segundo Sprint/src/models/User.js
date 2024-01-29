//const { readFileSync, writeFileSync } = require("fs");
//
const path = require('path');
//const { join } = require("path");
const { json } = require('express');
const fs = require('fs');

const userModel = {
  fileName: path.join(__dirname, '../data/users.json'),
  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
  },
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },
  findAll: function () {
    return this.getData();
  },
  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound;
  },
  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },
  create: function (userData) {
    let allUsers = this.findAll();
    let newUSer = {
      id: this.generateId(),
      ...userData
    }
    allUsers.push(newUSer);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return newUSer;
  },
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    return true;
  }
};
module.exports = userModel;