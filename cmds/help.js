const chalk = require('chalk');
const CLI = require('clui');
const clc = require('cli-color');

const { log } = console;

const { Line, LineBuffer } = CLI;

const outputBuffer = new LineBuffer({
  x: 0,
  y: 0,
});

new Line(outputBuffer)
  .column('---------#   Help For Havalar Nasıl   #---------', 100, [clc.green])
  .fill()
  .store();

new Line(outputBuffer)
  .column('Presentation of colorful manual', 100, [clc.red])
  .fill()
  .store();

outputBuffer.output();

const menus = {
  main: `
    havalarnasil [command] <options>
    
    today .............. show weather for today
    forecast ........... show 10-day weather forecast
    version ............ show package version
    help ............... show help menu for a command`,

  today: `
    havalarnasil today <options>

    --location, -l ..... the location to use`,
  forecast: `
    outside forecast <options>
   
    --location, -l ..... the location to use`,
};

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0];
  log(menus[subCmd] || chalk.blue(menus.main));
};
