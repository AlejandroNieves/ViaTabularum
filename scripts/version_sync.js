//import fs from 'node:fs';
const fs = require("fs");

/**
 * The goal of this script is to synchronize the version shown in package.json and manifest.json
 * package.json is the Single source of truth (SSOT)
 */

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const manifestPath = './via-tabularum/manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

if (manifest.version !== pkg.version) {
    manifest.version = pkg.version;
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
    console.log(`[sync-version] manifest.json -> ${pkg.version}`);
} else {
    console.log('[sync-version] versions already aligned');
}
