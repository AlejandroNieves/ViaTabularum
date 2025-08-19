//This is the key value where the new tab URL will be saved within local storage
export const STORAGE_KEY = "vt_new_tab_url";

//This is the default new tab redirection URL in case the one specified in local storage fails
export const DEFAULT_URL = "about:blank"

//DOM element IDs

export const BUTTON = "vt_save_new_tab_url_button";
export const INPUT = "vt_new_tab_url_input";
export const FEEDBACK_LED = "feedback-led";
export const FEEDBACK_TEXT = "feedback-text";

//Feedback messages
export const STATUS_OK = "OK";
export const STATUS_OK_WRITING = "New tab URL set successfully";
export const WARNING_DEFAULT = "Using default URL"
export const ERROR_DOM_ELEMENTS = "Error loading extension";
export const ERROR_INVALID_URL_STRING = "URL is invalid — using default";
export const ERROR_READING = "Error reading URL - using default";
export const ERROR_WRITING = "Error saving the new URL";