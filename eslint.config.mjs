import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import promise from 'eslint-plugin-promise';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';


export default defineConfig([
  js.configs.recommended,


 {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
    },
  },

  { files: ["**/*.{js,mjs,cjs}"], plugins: { promise },
    rules: {
      "promise/catch-or-return": "error",
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
