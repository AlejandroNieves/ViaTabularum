import {FEEDBACK_LED, FEEDBACK_TEXT} from "./constants.js";

export const LED = Object.freeze({
    OFF: "OFF",
    ON: "ON",
    WARNING: "WARNING",
    ERROR: "ERROR",
});

export function feedback(color, text) {
    feedbackLed(color);
    feedbackText(text);
}

const LED_COLOR = Object.freeze({
    OFF: "var(--led-off)",
    ON: "var(--led-on)",
    WARNING: "var(--led-warn)",
    ERROR: "var(--led-error)",
});


function feedbackLed(color) {
    const feedbackLight = document.getElementById(FEEDBACK_LED);
    if (feedbackLight) {
        const ledColor = LED_COLOR[color] || LED_COLOR.WARNING;
        feedbackLight.style.backgroundColor = ledColor;
        if (ledColor !== LED_COLOR.OFF) feedbackLight.style.boxShadow = `0 0 16px 4px ${ledColor}`;
    }
}

function feedbackText(text) {
    const feedbackText = document.getElementById(FEEDBACK_TEXT);
    if (feedbackText) feedbackText.textContent = text;
}

