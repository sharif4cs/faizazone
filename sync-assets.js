const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'assets', 'public');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = ['index.html', 'app.js', 'style.css', 'manifest.json', 'sw.js'];
files.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(targetDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Synced ${file} -> android/app/src/main/assets/public/${file}`);
  }
});

const iconsSrc = path.join(__dirname, 'icons');
const iconsDest = path.join(targetDir, 'icons');
if (fs.existsSync(iconsSrc)) {
  fs.cpSync(iconsSrc, iconsDest, { recursive: true });
  console.log(`Synced icons/ -> android/app/src/main/assets/public/icons/`);
}
console.log('Successfully synchronized all web assets to Android project.');
