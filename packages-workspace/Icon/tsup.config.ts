import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: [
    'generated/outline/index.ts',
    'generated/outline/*.tsx',
    'generated/solid/index.ts',
    'generated/solid/*.tsx',
    'generated/icons/index.ts',
    'generated/icons/*.tsx'
  ],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  ...options,
}));