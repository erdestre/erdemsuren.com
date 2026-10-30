import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // .devcheck = optional local hydration test build (dev React bundle + prerendered pages); .ssr-check-<name> =
  // private SSR bundles of foundation-notes/ssr-check.mjs (deleted after each run). Neither is ever committed.
  { ignores: ["dist", "dist-ssr", ".devcheck", ".ssr-check-*"] },
  {
    files: ["**/*.{js,jsx,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        __BUILD_YEAR__: "readonly",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: "19.1" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      // No PropTypes in this project (plain JS components with documented props).
      "react/prop-types": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true, allowExportNames: ["useLang"] },
      ],
    },
  },
  {
    // Entry points are not hot-reloaded modules; they legitimately export non-components.
    files: ["src/main.jsx", "src/entry-server.jsx"],
    rules: { "react-refresh/only-export-components": "off" },
  },
  {
    // Node-side files: build scripts and tool configs.
    files: ["scripts/**/*.{js,mjs}", "*.config.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];
