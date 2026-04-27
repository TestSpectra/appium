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
      if (file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.md') || file.endsWith('.yml') || file.endsWith('.yaml')) {
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

  // Use double quotes for the replacement to satisfy JSON requirements
  content = content.replace(/['"]appium\/support['"]/g, "\"@testspectra/appium/support\"");
  content = content.replace(/['"]appium\/plugin['"]/g, "\"@testspectra/appium/plugin\"");
  content = content.replace(/['"]appium\/types['"]/g, "\"@testspectra/appium/types\"");
  content = content.replace(/['"]appium\/driver['"]/g, "\"@testspectra/appium/driver\"");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file.replace(process.cwd() + '/', '')}`);
  }
}
console.log('Aggressive import fix v3 completed.');
