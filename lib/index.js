"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world!!!!!!!");
// notes from cmough/unfurledrelic:
// this is a basic start for the quote bot
// logic is likely as follows
// while (1)
//   listen in for commands
//   if get command:
//       do thing :)
var Discord = __importStar(require("discord.js"));
var token = "";
if (process.argv.length > 2) {
    token = process.argv[2];
}
var disc = new Discord.Client();
disc.once('ready', function () {
    console.log("client ready...");
    console.log("token is... " + token);
});
