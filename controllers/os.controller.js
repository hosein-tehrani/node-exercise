const os = require("os");
async function get(req, res) {
  try {
    res.writeHead(200, { "content-type": "application/json" });

    const uptime = os.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    const toGB = (bytes) => +(bytes / 1024 ** 3).toFixed(2);
    const userOS = {
      name: os.type(),
      arch: os.arch(),
      platform: os.platform(),
      release: os.release(),
      version: os.version(),
      userInfo: os.userInfo(),
      uptime: `${hours}h ${minutes}m ${seconds}s`,
      memoryInfo: {
        total: toGB(os.totalmem()) + " GB",
        free: toGB(os.freemem()) + " GB",
        used: toGB(os.totalmem() - os.freemem()) + " GB",
      },
      CPUs: os.cpus(),
      network: os.networkInterfaces(),
    };
    res.write(JSON.stringify(userOS));
    res.end();
  } catch (error) {
    console.error(error);
  }
}
const osController = {
  get,
};
module.exports = osController;
