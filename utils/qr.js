const QRCode = require('qrcode');
const path = require('path');

const generateQR = (text, directory) => {
  return new Promise((resolve, reject) => {
    // const sanitizedText = text.replace(/[^a-zA-Z0-9]/g, '_');
    const filePath = path.join(directory, `${text}.png`);

    QRCode.toFile(filePath, text, {
      color: {
        dark: '#000',  
        light: '#FFF'  
      }
    })
    .then(() => {
      resolve(filePath);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = generateQR