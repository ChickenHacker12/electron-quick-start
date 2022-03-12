let os = require("os");
let process = require("process");

export function getPerformanceStats() {
  return {
    cpu: {
      name: os.cpus()[0].model.trim(),
      speed: os.cpus()[0].speed
    },
    memory: {
      free: os.freemem(),
      total: os.totalmem()
    },
    hostName: os.hostname(),
    os: process.platform,
    threads: os.cpus()
  };
}
