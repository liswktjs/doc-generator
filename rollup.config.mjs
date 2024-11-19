import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
      banner: "#!/usr/bin/env node",
    },
    plugins: [
      resolve(),
      commonjs({
        strictRequires: false,
        transformMixedEsModules: true,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      json(),
    ],
    external: ["fs", "path", "tslib", "dotenv"],
  },
  {
    input: "./dist/index.d.ts",
    output: {
      file: "./dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
