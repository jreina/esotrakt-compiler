import data from "./fixture";
import { compile } from "../compile";
import fs from 'fs';

const tree = compile(data);
fs.writeFileSync("blah.json", JSON.stringify(tree), {
  encoding: "utf8"
});
