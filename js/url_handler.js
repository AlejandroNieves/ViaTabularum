import {
    DEFAULT_URL, ERROR_INVALID_URL_STRING, ERROR_READING, ERROR_WRITING, STATUS_OK_WRITING, STORAGE_KEY, WARNING_DEFAULT
} from './constants.js';
import {feedback, LED} from "./feedback_handler.js";

export async function getURL() {
    try {
        const result = await browser.storage.local.get(STORAGE_KEY);
        const value = result[STORAGE_KEY];
        if (value == null) {
            feedback(LED.WARNING, WARNING_DEFAULT)
            return DEFAULT_URL;
        }
        return value;
    } catch (e) {
        feedback(LED.WARNING, ERROR_READING);
        return DEFAULT_URL;
    }
}

export async function setURL(url) {
    try {
        const processedUrl = processURL(url);
        let canUseUrl = (processedUrl !== null);
        let checkedUrl = (canUseUrl) ? processedUrl : DEFAULT_URL;
            await browser.storage.local.set({[STORAGE_KEY]: checkedUrl});
            if (canUseUrl) {
                feedback(LED.ON, STATUS_OK_WRITING);
                return true;
            }
            feedback(LED.WARNING, ERROR_INVALID_URL_STRING);
            return false;
    } catch (e) {
        feedback(LED.ERROR, ERROR_WRITING);
        return false;
    }
}

function processURL(url){
    if (typeof url !== "string") return null;
    let processedUrl = url.trim()
    if (!isValidUrl(processedUrl)) {
        processedUrl = "https://" + processedUrl;
        if (!isValidUrl(processedUrl)) return null;
        return processedUrl;
    }
    return processedUrl;
}

function isValidUrl(input) {
    try {
        new URL(input);
        return true;
    } catch {
        return false;
    }
}