import {BUTTON, DEFAULT_URL, ERROR_DOM_ELEMENTS, INPUT} from './constants.js';
import {getURL, setURL} from "./url_handler.js";

document.addEventListener("DOMContentLoaded", async () => {

    const inputElement = document.getElementById(INPUT);
    const buttonElement = document.getElementById(BUTTON);

    async function fillInputWithStoredURL() {
        inputElement.value = await getURL();
    }

    async function buttonAction() {
        const inputFieldValue = inputElement.value.trim() || DEFAULT_URL;
        await setURL(inputFieldValue);
    }

    function setButtonLogic() {
        buttonElement.addEventListener("click", buttonAction);
        inputElement.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                buttonAction();
            }
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
