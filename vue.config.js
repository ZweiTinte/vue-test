const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    app: "src/main.ts",
    login: "src/pages/login/main.ts",
    detail: "src/pages/detail/main.ts",
  },
});
