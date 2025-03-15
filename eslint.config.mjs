import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off",                  // Disable unused variables
      "@typescript-eslint/no-unused-vars": "off", // Disable TS unused variables
      "react/no-unescaped-entities": "off",     // Disable escape character errors
    },
  },
];

export default eslintConfig;
