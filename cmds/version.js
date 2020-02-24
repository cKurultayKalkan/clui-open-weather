const chalk = require('chalk');

const { version } = require('../package.json');

const { log } = console;

module.exports = (args) => {
  log(chalk.red(`v${version}`));
};
