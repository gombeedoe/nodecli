const program = require("commander");
const fs = require("fs");
// import md2html module
const md2html = require("./md2html");

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

  // convert MD to HTML by md2html module
  const html = md2html(file, cliOptions);
  console.log(html);
});
