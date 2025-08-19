//This is the key value where the new tab URL will be saved within local storage
export const STORAGE_KEY = "vt_new_tab_url";

//This is the default new tab redirection URL in case the one specified in local storage fails
export const DEFAULT_URL = "https://www.google.es/"

//DOM element IDs

export const BUTTON = "vt_save_new_tab_url_button";
export const INPUT = "vt_new_tab_url_input";

//Error messages
export const ERROR_DOM_ELEMENTS = "Necessary DOM elements don't exist.";
export const ERROR_INVALID_URL_STRING = "Invalid URL string.";
export const ERROR_READING = "Error reading from local storage.";
export const ERROR_WRITING = "Error writing to local storage.";