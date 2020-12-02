#!/usr/bin/env node
const iconGenerator = require("./scripts/android_script/icon_generator");
var arguments = process.argv;

switch (arguments[2]) {
  case "android:res":
    iconGenerator.generateIcon(arguments[3]);
    break;
  default:
    return;
}
