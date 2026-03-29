const fs = require('fs');
const path = require('path');

const enFile = path.join(__dirname, 'src', 'locales', 'en.json');
const siFile = path.join(__dirname, 'src', 'locales', 'si.json');

const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const siData = JSON.parse(fs.readFileSync(siFile, 'utf8'));

const details_en = require('./details_en.json');
const details_si = require('./details_si.json');

enData.careerFields.details = details_en;
siData.careerFields.details = details_si;

fs.writeFileSync(enFile, JSON.stringify(enData, null, 2));
fs.writeFileSync(siFile, JSON.stringify(siData, null, 2));

console.log("Successfully merged details into localization files!");
