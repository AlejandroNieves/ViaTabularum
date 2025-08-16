import {DEFAULT_URL} from './constants.js';
import {getURL, setURL} from "./url_handler.js";

const BUTTON = "vt_save_new_tab_url_button";
const INPUT = "vt_new_tab_url_input";
const OUTPUT = "vt_new_tab_url_output";

const ERROR_DOM_ELEMENTS = "Necessary DOM elements don't exist.";

document.addEventListener("DOMContentLoaded", async () => {

    const inputElement = document.getElementById(INPUT);
    const outputElement = document.getElementById(OUTPUT);
    const buttonElement = document.getElementById(BUTTON);

    async function fillInputWithStoredURL() {
        inputElement.value = await getURL();
        await updateOutput();
    }

    function setButtonLogic() {
        buttonElement.addEventListener("click", async () => {
            const inputFieldValue = inputElement.value.trim() || DEFAULT_URL

            await setURL(inputFieldValue);
            await updateOutput();
        });
    }

    async function updateOutput() {
        try {
            outputElement.textContent = await getURL();
        } catch (e) {
            outputElement.textContent = DEFAULT_URL;
        }
    }

    function elementsExist() {
        return (inputElement && outputElement && buttonElement);
    }

    if (!elementsExist()) {
        console.error(ERROR_DOM_ELEMENTS);
        return;
    }

    await fillInputWithStoredURL();
    setButtonLogic()
});
