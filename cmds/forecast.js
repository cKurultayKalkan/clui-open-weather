const chalk = require('chalk');
const ora = require('ora');

const { log } = console;

const { WeatherForecast } = require('../utils/weather');

module.exports = async (args) => {
  const spinner = ora().start();
  try {
    const forecast = new WeatherForecast();
    const location = args.location || args.l;
    const temp = await forecast.getForecast(location);
    spinner.stop();
    log(chalk.yellow(`\t${location.toUpperCase()} için anlık hava durumu`));

    log(chalk.red(`Sıcaklık:\t\t ${temp.temp}°`));
    log(chalk.blue(`Nem: \t\t\t${temp.humidity} %`));
    log(chalk.yellow(`Basınç: \t\t${temp.pressure} hpa`));
    log(chalk.green(`Hava Tahmini: \t\t${temp.description.toUpperCase()}`));
    log(chalk.cyan(`Yağmur: \t\t${temp.rain ? 'Var' : 'Yok'}`));
  } catch (e) {
    spinner.stop();
    log(chalk.red.bgBlackBright.bold(e));
  }
};
