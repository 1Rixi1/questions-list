import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

import boundaries from "eslint-plugin-boundaries";
import importPlugin from "eslint-plugin-import";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      boundaries,
      import: importPlugin,
    },

    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: "app",
              allow: ["pages", "widgets", "features", "entities", "shared"],
            },

            {
              from: "pages",
              allow: ["widgets", "features", "entities", "shared"],
            },
            { from: "widgets", allow: ["features", "entities", "shared"] },
            { from: "features", allow: ["entities", "shared"] },
            { from: "entities", allow: ["shared"] },
            { from: "shared", allow: ["shared"] },
          ],
        },
      ],
      "boundaries/entry-point": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              target: "pages",
              allow: ["**/index.ts"],
            },
            { target: "widgets", allow: ["**/index.ts"] },
            { target: "features", allow: ["**/index.ts"] },
            { target: "entities", allow: ["**/index.ts"] },
            { target: "shared", allow: ["**/index.ts"] },
          ],
        },
      ],
    },

    settings: {
      "boundaries/elements": [
        { type: "app", pattern: "src/app/**" },
        { type: "pages", pattern: "src/pages/**" },
        { type: "widgets", pattern: "src/widgets/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "shared", pattern: "src/shared/**" },
      ],
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
