const fs = require('fs');

let directoryName = process.argv[2];
if (!directoryName) {
  console.error('Missing argument for directory name');
  process.exit(1);
}

if (directoryName.endsWith('/')) {
  directoryName = directoryName.slice(0, -1)
}


const filesList = fs.readdirSync(directoryName);

console.log(filesList);

const setName = directoryName.substring(directoryName.lastIndexOf('/') + 1);



const tileFilesArray = [];

for (const f of filesList) {
  let sortString = f.substring(f.indexOf('-') + 1);
  sortString = sortString.substring(0, sortString.lastIndexOf('.'));
  const tileFileString = `    '${f}': {'count': 0, 'fileName': '${f}', 'set': '${setName}', 'sortString': '${sortString}'},`;
  tileFilesArray.push(tileFileString);
}

const tileFilesString = tileFilesArray.join('\n');

const filesListCode = `
tiles.${setName} = {
  name: 'TODO',
  tiles: {
${tileFilesString}
  }
};
`;

console.log(filesListCode);
