const chalk = require('chalk');
const ora = require('ora');

const { log } = console;
const { WeatherForecast } = require('../utils/weather');

module.exports = async (args) => {
  const spinner = ora().start();
  try {
    const forecast = new WeatherForecast();
    const location = args.location || args.l;
    const temp = await forecast.getForecastForCity(location);
    spinner.stop();
    log(chalk.yellow(`${location} için hava sıcaklığı : `) + chalk.red(`${temp}°`));
  } catch (e) {
    spinner.stop();
    log(chalk.red.bgBlackBright.bold(e));
  }
};
