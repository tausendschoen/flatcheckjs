const fs = require('fs');
const packageJson = require('./package.json');

const version = packageJson.version;
const outputFile = 'src/components/appVersion.js'; // Datei, in der die Variable gespeichert wird

const content = `export const AppVersion = "${version}";\n`;

fs.writeFileSync(outputFile, content);
console.log(`Version ${version} in ${outputFile} geschrieben.`);