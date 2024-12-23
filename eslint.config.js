import js from "@eslint/js";
import globals from "globals";
export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    files: ["**/*.js"],
    rules: {
      ...js.configs.recommended.rules,
    },
  }
];
