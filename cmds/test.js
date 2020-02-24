const os = require('os');
const clui = require('clui');
const clc = require('cli-color');

const {
  Line, LineBuffer, Progress, Spinner, Sparkline,
} = clui;

module.exports = (args) => {
  const outputBuffer = new LineBuffer({
    x: 0,
    y: 0,
    height: 'console',
    width: 'console',
  });

  new Line(outputBuffer)
    .column('---------#   Test For Havalar Nasıl   #---------', 100, [clc.green])
    .fill()
    .store()
    .output();

  new Line(outputBuffer)
    .column('---------#   Gauge Test   #---------', 100, [clc.green])
    .fill()
    .store()
    .output();

  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;
  const humanreadleram = `${Math.ceil(used / 1000000)} MB`;

  console.log(clui.Gauge(used, total, 40, total * 0.8, humanreadleram));


  new Line(outputBuffer)
    .column('---------#   Sparkline Test   #---------', 100, [clc.green])
    .fill()
    .store()
    .output();

  const reqsPerSec = [10, 12, 3, 7, 12, 9, 23, 10, 9, 19, 16, 18, 12, 12];

  console.log(Sparkline(reqsPerSec, 'reqs/sec'));


  new Line(outputBuffer)
    .column('---------#   Progres Test   #---------', 100, [clc.green])
    .fill()
    .store()
    .output();

  const thisProgressBar = new Progress(20);
  console.log(thisProgressBar.update(10, 30));


  new Line(outputBuffer)
    .column('---------#   Spinner Test   #---------', 100, [clc.green])
    .fill()
    .store()
    .output();

  const countdown = new Spinner('Exiting in 3 seconds...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);

  countdown.start();

  let number = 3;
  setInterval(() => {
    number -= 1;
    countdown.message(`Exiting in ${number} seconds...  `);
    if (number === 0) {
      process.stdout.write('\n');
      process.exit(0);
    }
  }, 3);


  const thisPercentBar = new Progress(20);
  console.log(thisPercentBar.update(0.4));


  new Line(outputBuffer)
    .column('Presentation of colorful manual', 100, [clc.red])
    .fill()
    .store()
    .output();
};
