const { listLeagues } = require("../Controllers/LoL/LoLCtrl");

module.exports = app => {
  app.get(`/api/listlolleagues`, listLeagues);
};
