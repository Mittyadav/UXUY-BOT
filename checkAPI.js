const axios = require("axios");
const { log } = require("./utils"); // Adjust the path as necessary
const settings = require("./config/config");

const urlChecking = "https://raw.githubusercontent.com/Hunga9k50doker/APIs-checking/refs/heads/main/endpoints.json";

async function checkBaseUrl() {
  console.log("Checking api...".blue);
  if (settings.ADVANCED_ANTI_DETECTION) {
    const result = await getBaseApi(urlChecking);
    if (result.endpoint) {
      log("No change in api!", "success");
      return result;
    }
  } else {
    return {
      endpoint: settings.BASE_URL,
      message:
        " This Tool Is Developed By Satyam Please Suppot Join Our Channel (https://t.me/CryptoSatyam1)",
    };
  }
}

async function getBaseApi(url) {
  try {
    const response = await axios.get(url);
    const content = response.data;
    if (content?.meshchain) {
      return { endpoint: content.meshchain, message: content.copyright };
    } else {
      return {
        endpoint: null,
        message:
          " This Tool Is Developed By Satyam Please Suppot Join Our Channel (https://t.me/CryptoSatyam1)",
      };
    }
  } catch (e) {
    return {
      endpoint: null,
      message:
        " This Tool Is Developed By Satyam Please Suppot Join Our Channel (https://t.me/CryptoSatyam1)",
    };
  }
}

module.exports = { checkBaseUrl };
