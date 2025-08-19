import {BUTTON, DEFAULT_URL, ERROR_DOM_ELEMENTS, ERROR_INVALID_URL_STRING, INPUT} from './constants.js';
import {getURL, setURL} from "./url_handler.js";
import {feedback, LED} from "./feedback_handler.js";

document.addEventListener("DOMContentLoaded", async () => {

    const inputElement = document.getElementById(INPUT);
    const buttonElement = document.getElementById(BUTTON);

    async function fillInputWithStoredURL() {
        inputElement.value = await getURL();
    }

    async function buttonAction() {
        const inputFieldValue = inputElement.value.trim() || DEFAULT_URL;
        try {
            await setURL(inputFieldValue);
        } catch (e) {
            feedback(LED.ERROR, ERROR_INVALID_URL_STRING);
        }
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
        feedback(LED.ERROR, ERROR_DOM_ELEMENTS);
        return;
    }

    await fillInputWithStoredURL();
    setButtonLogic()
});
