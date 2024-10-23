export default {
  server: {
    proxy: {
      "/predict": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/src/",
  assetsDir: "assets",
};
