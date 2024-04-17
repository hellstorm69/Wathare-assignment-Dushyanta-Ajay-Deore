

const axios = require('axios');

const fetchTemperature = async (location) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
    return response.data.current.temp_c;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { fetchTemperature };
