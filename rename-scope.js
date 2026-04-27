const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

  // 1. Replace @testspectra/ with @testspectra/
  content = content.replace(/@appium\//g, '@testspectra/');

  // 2. Replace the main package name "appium" in imports and dependencies.
  // This is a bit tricky, we look for specific patterns:
  // "appium": "workspace:*" or "appium": "^x.x.x" in package.json
  if (file.endsWith('package.json')) {
    content = content.replace(/"appium":\s*"/g, '"@testspectra/appium": "');
    // also rename the package name if it's the appium package
    if (file.includes('/packages/appium/package.json')) {
      content = content.replace(/"name":\s*"appium"/, '"name": "@testspectra/appium"');
    }
  }

  // imports in TS/JS files
  if (file.endsWith('.ts') || file.endsWith('.js')) {
    content = content.replace(/from\s+['"]appium['"]/g, 'from \'@testspectra/appium\'');
    content = content.replace(/require\(['"]appium['"]\)/g, 'require(\'@testspectra/appium\')');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file.replace(process.cwd() + '/', '')}`);
  }
}
console.log('Scope rename completed.');
