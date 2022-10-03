const fs = require('fs-extra');

// Удаление директории
const clear = async function () {
  try {
    await fs.remove('./public/');
    await fs.mkdir('./public');
    console.log('clean success!');
  } catch (err) {
    console.error(err);
  }
};

module.exports = clear;
