import baseConfig from "@kdramadb/eslint-config/base";
import reactConfig from "@kdramadb/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
