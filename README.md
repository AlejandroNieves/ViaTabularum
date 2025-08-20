<div align="center" style="display: flex; flex-direction: column; align-items: center">
<img src="icons/icon_viatabularum.png" alt="Via Tabularum Logo" width="256px" height="256px"/>
<h1>Via Tabularum</h1>
<p>A very simple Firefox extension to control where new tabs redirect to.</p>
</div>

## Features

- Set a custom URL for new tabs.
- Saves your preference in browser storage.
- Simple UI with an input field and save button.

## How to use

1. Click on the extension icon on the toolbar
2. insert a valid URL you wish to see when opening new tabs.
3. Click on **SET**.
4. Now, when you open new tabs, the extension will redirect to the specified URL.
5. You can specify the protocol. If no protocol is specified, `https://` will be assumed.

## Installing the addon

You can download the addon from the Firefox extensions page.
If you want to directly download the source and try it as a temporary debug extension, do as follows:

1. Download or clone this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from this repo.
5. The addon should be active now and available for use on the browser toolbar.

## Development

- Written in plain JavaScript.
- Uses `browser.storage.local` for storage persistence. Works only within Firefox extensions.
- Main files:
    - `manifest.json` — extension manifest
    - `constants.js` — constants and defaults
    - `feedback_handler.js` — controls the feedback LED light and text
    - `url_handler.js` — storage helpers
    - `options.js` — UI logic for the options page
    - `newtab.html` — redirection page
    - `via_tabularum.html` — UI of the extension 


## License

This project is licensed under the **GNU General Public License (GPL) v3**.  
You are free to use, modify, and redistribute it, but any derivative work must also be licensed under GPL.

## About the Author

I am a **back-end software developer** with complementary experience in front-end development.
I graduated with honors as a technician in multiplatform application development, and my professional experience includes working with microservices, REST APIs, ETL processes, and web applications.

My main expertise lies in **Java**, **Spring Framework**, and database engines such as **PostgreSQL** and MongoDB. For front-end development, I typically work with the core HTML/CSS/JavaScript stack, as well as frameworks like Angular when needed.

I particularly enjoy creating small, simple applications that solve everyday problems.

I am fluent in **Spanish** and **English**, and also speak Esperanto. I'm currently training in French.

- [LinkedIn](https://www.linkedin.com/in/alejandro-n-970b93240/)
- [Webpage (Spanish) - www.alejandronieves.es](https://www.alejandronieves.es/)
