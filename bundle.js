const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");

require("esbuild")
  .build({
    entryPoints: ["src/app.ts"],
    bundle: true,
    plugins: [vanillaExtractPlugin()],
    outdir: "./dist",
  })
  .catch(() => process.exit(1));
