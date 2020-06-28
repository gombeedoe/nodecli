const program = require("commander");
const fs = require("fs");
// package convert MD to HTML
const marked = require("marked");

// get file path from CL arg
program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// read file async as UTF-8
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if (err) {
    console.error(err.message);

    // exit process as status"1"
    process.exit(1);
    return;
  }

  const html = marked(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
});
