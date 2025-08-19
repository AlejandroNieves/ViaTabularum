import {BUTTON, DEFAULT_URL, ERROR_DOM_ELEMENTS, INPUT} from './constants.js';
import {getURL, setURL} from "./url_handler.js";

document.addEventListener("DOMContentLoaded", async () => {

    const inputElement = document.getElementById(INPUT);
    const buttonElement = document.getElementById(BUTTON);

    async function fillInputWithStoredURL() {
        inputElement.value = await getURL();
    }

    function setButtonLogic() {
        buttonElement.addEventListener("click", async () => {
            const inputFieldValue = inputElement.value.trim() || DEFAULT_URL
            await setURL(inputFieldValue);
        });
    }

    function elementsExist() {
        return (inputElement && buttonElement);
    }

    if (!elementsExist()) {
        console.error(ERROR_DOM_ELEMENTS);
        return;
    }

    await fillInputWithStoredURL();
    setButtonLogic()
});
