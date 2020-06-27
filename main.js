const program = require("commander");
const fs = require("fs");

// get file path from CL arg
program.parse(process.argv);
const filePath = program.args[0];

// read file async as UTF-8
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);

    // exit process as status"1"
    process.exit(1);
    return;
  }

  console.log(file);
});
