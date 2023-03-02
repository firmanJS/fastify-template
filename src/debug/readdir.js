const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '../modules');

const data = fs.readdirSync(directory)
data.map((r) => {
  if (r !== 'README.md') {
    console.log(fs.readFileSync(path.join(__dirname, `../modules/${r}/index.js`)));
  }
})
