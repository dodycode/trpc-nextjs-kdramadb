import baseConfig, { restrictEnvAccess } from "@kdramadb/eslint-config/base";
import nextjsConfig from "@kdramadb/eslint-config/nextjs";
import reactConfig from "@kdramadb/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
