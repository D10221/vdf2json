import vdf from "steam-binary-vdf";
import fs from "fs";
process.stdout.write(
  JSON.stringify(
    vdf.readVdf(
      fs.readFileSync(
          process.argv.slice(2)[0],
        ),
    ),
  ) + "\n",
);
