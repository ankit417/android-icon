#!/usr/bin/env node
const iconGenerator = require("./script/generate");
var arguments = process.argv;
iconGenerator.generateIcon(arguments[2]);
