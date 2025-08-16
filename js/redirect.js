import {getURL} from "./url_handler.js";


(async () => {
    const targetUrl = await getURL();
    console.log(`Target: ${targetUrl}`)
    if (targetUrl) location.href = targetUrl;
})();
