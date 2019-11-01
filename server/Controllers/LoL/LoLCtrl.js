const axios = require("axios");
const API = "X-448y4Klq1b-EyZFuI95wi13CX7kg6orOxj_Uz20jgCCMiByek";

let listLeagues = async (req, res) => {
  let info = await axios.get(`https://api.pandascore.co/leagues`, {
    headers: {
      Authorization: API
    }
  });

  let results = info.data;
  if (results) {
    res.status(200).json(results);
  }
};

module.exports = {
  listLeagues
};
