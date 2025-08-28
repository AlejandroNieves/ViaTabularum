import {FEEDBACK_LED, FEEDBACK_TEXT} from "./constants.js";

/**
 * Made to easily pass arguments for the LED colors
 * @type {Readonly<{ERROR: string, WARNING: string, OFF: string, ON: string}>}
 */
export const LED = Object.freeze({
    OFF: "OFF",
    ON: "ON",
    WARNING: "WARNING",
    ERROR: "ERROR",
});

/**
 * This procedure allows to easily operate the UIs feedback.
 * @param color lights the LED in different ways. Can be handled easily with the LED enum.
 * @param text the text that will be shown in the UI.
 */
export function feedback(color, text) {
    feedbackLed(color);
    feedbackText(text);
}

/**
 * Not meant to be used outside this scope.
 * This simply translates any of the possible LED states into specific color variables.
 * These variables currently appear in options.css.
 * Make sure the variables are available and with proper names or the LED will stop working.
 * @type {Readonly<{ERROR: string, WARNING: string, OFF: string, ON: string}>}
 */
const LED_COLOR = Object.freeze({
    OFF: "var(--led-off)",
    ON: "var(--led-on)",
    WARNING: "var(--led-warn)",
    ERROR: "var(--led-error)",
});


/**
 * Logic controlling how the LED element behaves and looks.
 * Changes are color and shine (box shadow property).
 * Most modes make the LED shine with a box shadow.
 * The off mode is the exception.
 * @param color
 */
function feedbackLed(color) {
    const feedbackLight = document.getElementById(FEEDBACK_LED);
    if (feedbackLight) {
        const ledColor = LED_COLOR[color] || LED_COLOR.WARNING;
        feedbackLight.style.backgroundColor = ledColor;
        if (ledColor !== LED_COLOR.OFF) feedbackLight.style.boxShadow = `0 0 16px 4px ${ledColor}`;
    }
}

/**
 * Logic controlling text shown in the UI
 * @param text
 */
function feedbackText(text) {
    const feedbackText = document.getElementById(FEEDBACK_TEXT);
    if (feedbackText) feedbackText.textContent = text;
}

