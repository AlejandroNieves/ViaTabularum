import {BUTTON, DEFAULT_URL, ERROR_DOM_ELEMENTS, ERROR_INVALID_URL_STRING, INPUT} from './constants.js';
import {getURL, setURL} from "./url_handler.js";
import {feedback, LED} from "./feedback_handler.js";

document.addEventListener("DOMContentLoaded", async () => {

    const inputElement = document.getElementById(INPUT);
    const buttonElement = document.getElementById(BUTTON);

    /**
     * When the extension is loaded, the stored URL will be shown in the input field, if it exists.
     * @return {Promise<void>}
     */
    async function fillInputWithStoredURL() {
        inputElement.value = await getURL();
    }

    /**
     * Button logic. Attempts to store the specified URL.
     * If the input is empty, the default URL will be used instead.
     * Any error here will turn the LED red.
     * @return {Promise<void>}
     */
    async function buttonAction() {
        const inputFieldValue = inputElement.value.trim() || DEFAULT_URL;
        try {
            await setURL(inputFieldValue);
        } catch (e) {
            feedback(LED.ERROR, ERROR_INVALID_URL_STRING);
        }
    }

    /**
     * Sets the button events both when clicked and when pressing enter while using the input field.
     */
    function setButtonLogic() {
        buttonElement.addEventListener("click", buttonAction);
        inputElement.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                buttonAction();
            }
        });
    }

    /**
     * Check if essential elements exist.
     * @return {HTMLElement}
     */
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
