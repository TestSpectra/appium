const fs = require('fs');
const path = require('path');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'build', 'dist', '.bun'].includes(file)) {
        findFiles(path.join(dir, file), fileList);
      }
    } else {
      if (file.endsWith('.json')) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const allFiles = findFiles(process.cwd());

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Find single quoted strings that contain @testspectra and replace with double quotes
  // This is a simple regex for this specific case
  content = content.replace(/'(@testspectra\/appium\/[^']+)'/g, "\"$1\"");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file.replace(process.cwd() + '/', '')}`);
  }
}
console.log('JSON quotes fix completed.');
