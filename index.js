#!/usr/bin/env node
const iconGenerator = require("./script/generate");
var arguments = process.argv;
if (arguments[2]) {
  iconGenerator.generateIcon(arguments[2]);
} else {
  console.log("Image name required");
}
