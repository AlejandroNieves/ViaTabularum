import {STORAGE_KEY, DEFAULT_URL} from './constants.js';

const ERROR_INVALID_URL_STRING = "Invalid URL string.";
const ERROR_READING = "Error reading from local storage.";
const ERROR_WRITING = "Error writing to local storage.";

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
