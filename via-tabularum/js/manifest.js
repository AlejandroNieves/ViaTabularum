import {ERROR_MANIFEST_NOT_FOUND} from "./constants.js";

export function getManifest() {
    const manifest = browser.runtime.getManifest();
    if (manifest) return manifest;
    throw new Error(ERROR_MANIFEST_NOT_FOUND);
}

export function getVersion() {
    return getManifest().version;
}