import * as esbuild from "esbuild";
import fs from "fs";

const fileContent = fs.readFileSync("./package.json", "utf-8");
const packageJson = JSON.parse(fileContent);
const dependencies = packageJson.dependencies ?? {};
const external = Object.keys(dependencies);

await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: false,
  outdir: "dist",
  platform: "node",
  target: "node22.2",
  external
});
