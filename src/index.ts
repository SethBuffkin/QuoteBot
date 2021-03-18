console.log("Hello world!!!!!!!");

// notes from cmough/unfurledrelic:
// this is a basic start for the quote bot
// logic is likely as follows
// while (1)
//   listen in for commands
//   if get command:
//       do thing :)
import * as Discord from "discord.js";

let token = "";
if (process.argv.length > 2) {
  token = process.argv[2];
}

let disc = new Discord.Client();

disc.once('ready', () => {
  console.log("client ready...");
  console.log("token is... " + token);  
});

disc.login('tokytoky');
