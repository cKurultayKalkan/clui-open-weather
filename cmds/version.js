const chalk = require('chalk');

const { version } = require('../package.json');

module.exports = (args) => {
  console.log(chalk.red(`v${version}`));
};
