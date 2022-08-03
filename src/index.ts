import Spinnies from "@trufflesuite/spinnies";
import chalk from "chalk";

const spinnies = new Spinnies();

console.log(chalk.blue("starting"), chalk.green("spinnies"));

spinnies.add("spinner-1", { text: "I am a spinner" });
spinnies.add("spinner-2", { text: "I am another spinner" });

setTimeout(() => {
  spinnies.succeed("spinner-1", { text: "Success!" });
  spinnies.fail("spinner-2", { text: "Fail :(" });
}, 2000);
