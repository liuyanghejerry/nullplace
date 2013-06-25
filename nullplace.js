var fs = require('fs');

function createWritableNullDevice() {
  // TODO: add more platforms
  if (process.platform === 'win32') {
    return fs.createWriteStream('nul');
  }else{
    return fs.createWriteStream('/dev/null');
  }
};

function createReadableNullDevice() {
  // TODO: add more platforms
  if (process.platform === 'win32') {
    // FIXME: I don't believe Windows can handle a readable nul
    return fs.createReadStream('nul');
  }else{
    return fs.createReadStream('/dev/null');
  }
};

exports.WritableNullDevice = createWritableNullDevice();
exports.ReadableNullDevice = createReadableNullDevice();
