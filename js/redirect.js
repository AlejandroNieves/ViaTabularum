import {getURL} from "./url_handler.js";

/**
 * Automatically redirects to the stored new tab URL, if it exists in local storage.
 */
(async () => {
    const targetUrl = await getURL();
    console.log(`Target: ${targetUrl}`)
    if (targetUrl) location.href = targetUrl;
})();
