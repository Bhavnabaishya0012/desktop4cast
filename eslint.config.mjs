import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/*.js",
        "**/*.graphql.ts",
        "src/docs/*",
        "**/*.json",
        "examples/**/node_modules/**/*", // Ignore node_modules in examples
        "examples/**/dist/**/*",        // Ignore build output in examples
        "**/codegen.ts",
    ],
}, ...fixupConfigRules(compat.extends(
    // "next/core-web-vitals", // Temporarily disabled
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/recommended",
)), {
    plugins: {
        import: fixupPluginRules(_import),
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: path.resolve(__dirname, "./examples/nextjs/tsconfig.json"),
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: "./tsconfig.json",
        },
    },

    rules: {
        "padding-line-between-statements": ["error", {
        blankLine: "always",
        prev: "*",
        next: ["return", "if", "try"],
    }],
    "next/no-html-link-for-pages": "off",

        "eol-last": ["error", "always"],
        curly: ["error"],
        indent: "off",
        quotes: ["error", "single"],
        "brace-style": ["error", "stroustrup"],
        "prefer-const": "off",

        "key-spacing": ["error", {
            beforeColon: false,
        }],

        "arrow-spacing": "error",
        "space-infix-ops": "error",
        "space-before-blocks": "error",
        "no-multi-spaces": "warn",
        "no-trailing-spaces": "warn",
        semi: ["error", "never"],
        "max-len": "off",
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],

        "no-multiple-empty-lines": ["error", {
            max: 2,
        }],

        "comma-spacing": "warn",

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        }],

        "keyword-spacing": "error",

        "import/order": ["error", {
            groups: [["builtin", "external"], "internal"],

            pathGroups: [{
                pattern: "react",
                group: "builtin",
                position: "before",
            }, {
                pattern: "wagmi",
                group: "external",
            }, {
                pattern: "viem",
                group: "external",
            }, {
                pattern: "cookies-next",
                group: "external",
            }, {
                pattern: "@apollo/**",
                group: "external",
            }],

            "newlines-between": "always",
        }],

        "import/first": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/no-dynamic-require": 0,
        "import/prefer-default-export": 0,
        "import/no-webpack-loader-syntax": 0,
        "import/no-named-as-default-member": 1,
        "import/no-extraneous-dependencies": 0,
        "import/no-anonymous-default-export": 0,

        "import/newline-after-import": ["error", {
            count: 2,
        }],

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/type-annotation-spacing": "error",

        "@typescript-eslint/indent": ["error", 2, {
            SwitchCase: 1,
        }],
    },
}];