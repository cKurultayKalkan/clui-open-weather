const chalk = require('chalk');
const { WeatherForecast } = require('../utils/weather');

module.exports = async (args) => {
  const forecast = new WeatherForecast();
  const res = await forecast.getForecastForCity('Istanbul');
  console.log(chalk.yellow(res));
};
