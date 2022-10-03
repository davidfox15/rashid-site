const browserSync = require("browser-sync").create('MyServer');

// Локальный сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
};

module.exports = server;
