// AI-assisted: Data pre-processing script - Joins CSV and GeoJSON, filters to LA metro area
const fs = require('fs');

// Configuration
const config = {
    geojson: './assets/blockgroups.geojson',
    csv: './assets/htaindex2022_data_blkgrps_06.csv',
    csvGeoidField: 'blkgrp',
    geoidField: 'GEOID',
    defaultField: 'ht_ami',
    output: './assets/census-data-processed.geojson'
};

// Normalize GEOID to consistent format
function normalizeGeoid(id) {
    return String(id || '').trim().replace(/^"+|"+$/g, '').padStart(12, '0');
}

// Simple CSV parser
function parseCSV(text) {
    const lines = text.split('\n').filter(l => l.trim());
    if (!lines.length) return [];
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const values = [];
        let current = '';
        let inQuotes = false;
        for (let char of lines[i]) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.replace(/^"+|"+$/g, '').trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.replace(/^"+|"+$/g, '').trim());
        const row = {};
        headers.forEach((h, j) => {
            let val = values[j] || '';
            const num = parseFloat(val);
            row[h] = isNaN(num) ? val : num;
        });
        data.push(row);
    }
    return data;
}

// Process data
console.log('Loading files...');
const csvText = fs.readFileSync(config.csv, 'utf8');
const csvData = parseCSV(csvText);
const geojson = JSON.parse(fs.readFileSync(config.geojson, 'utf8'));

console.log(`CSV rows: ${csvData.length}`);
console.log(`GeoJSON features: ${geojson.features.length}`);

// Filter to LA metro area counties first
console.log('Filtering to LA metro area...');
const laMetroCounties = ['06037', '06059', '06065', '06071', '06111'];
geojson.features = geojson.features.filter(f => {
    const geoid = String(f.properties[config.geoidField] || '');
    return laMetroCounties.some(county => geoid.startsWith(county));
});
console.log(`Filtered to ${geojson.features.length} features`);

// Create lookup
console.log('Creating lookup table...');
const lookup = {};
csvData.forEach(row => {
    const id = normalizeGeoid(row[config.csvGeoidField]);
    if (id) lookup[id] = row;
});

// Join data
console.log('Joining data...');
let matchedCount = 0;
geojson.features.forEach(f => {
    const id = normalizeGeoid(f.properties[config.geoidField]);
    if (lookup[id]) {
        Object.assign(f.properties, lookup[id]);
        const val = f.properties[config.defaultField];
        if (!val || isNaN(parseFloat(val))) {
            delete f.properties[config.defaultField];
        } else {
            matchedCount++;
        }
    }
});

console.log(`Matched ${matchedCount} features with data`);

// Write output
console.log(`Writing to ${config.output}...`);
fs.writeFileSync(config.output, JSON.stringify(geojson, null, 2));
console.log('Done! Processed data saved.');

