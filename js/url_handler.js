import {DEFAULT_URL, ERROR_INVALID_URL_STRING, ERROR_READING, ERROR_WRITING, STORAGE_KEY} from './constants.js';

export async function getURL() {
    try {
        const result = await browser.storage.local.get(STORAGE_KEY);
        return result[STORAGE_KEY] ?? DEFAULT_URL;
    } catch (e) {
        console.error(ERROR_READING, e);
        return DEFAULT_URL;
    }
}

export async function setURL(url) {
    if (typeof url !== "string" || !url.trim()) throw new Error(ERROR_INVALID_URL_STRING);
    try {
        await browser.storage.local.set({[STORAGE_KEY]: url});
    } catch (e) {
        console.error(ERROR_WRITING, e);
    }
}
