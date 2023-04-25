module.exports.getPowerConsumption = async (req, res) => {
  var exec = require("child_process").exec;
  exec("tasklist", function (err, stdout, stderr) {
    var lines = stdout.split("\n");
    var json = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line === "") continue;
      var values = line.split(/\s+/);
      if(values[0] != "=========================" && values[0] != "Image"){
        json.push({
          imageName: values[0],
          pid: values[1],
          sessionName: values[2],
          sessionNumber: values[3],
          memUsage: values[4],
        });
      }
    }

    console.log(json);
    res.send(json);
  });
};

module.exports.getPowerConsumptionForSpecificApp = async (req, res) => {
  try {
    const { appName } = req.body;
    const { execSync } = require("child_process");
    const processName = appName;

    const output = execSync(
      `tasklist /FI "IMAGENAME eq ${processName}" /FO CSV`
    )
      .toString()
      .trim()
      .split(/\r?\n/)[1];
    const pid = parseInt(output.split(",")[1].replace(/"/g, ""));
    const memoryUsage = process.memoryUsage(pid);

    let memoryInfo = {
      processInfo: memoryUsage,
      memryInfo: `Memory usage of ${processName}: ${memoryUsage.rss} bytes`,
    };

    console.log(`Memory usage of ${processName}: ${memoryUsage.rss} bytes`);

    res.send(memoryInfo);
  } catch (error) {
    res.send("Error occured " + error);
  }
};
