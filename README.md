<div align="center" style="display: flex; flex-direction: column; align-items: center">
<img src="icons/icon_viatabularum.png" alt="Via Tabularum Logo" width="256px" height="256px"/>
<h1>Via Tabularum</h1>
<p>A very simple Firefox extension to control where new tabs redirect to.</p>
</div>

## Features

- Set a custom URL for new tabs.
- Saves your preference in browser storage.
- Simple UI with an input field and save button.

## Installation

1. Download or clone this repository.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from this repo.
5. Open a new tab — it should redirect to your chosen URL.

## Usage

1. Click on the extension icon (also known as browser action) on Firefox's toolbar. 
2. Enter your desired new tab URL on the small form.
3. Click **Save**.
4. Opening a new tab will now redirect to the URL you set.

## Development

- Written in plain JavaScript.
- Uses `browser.storage.local` for storage persistence. Works within Firefox extensions.
- Main files:
    - `manifest.json` — extension manifest
    - `constants.js` — constants and defaults
    - `url_handler.js` — storage helpers
    - `options.js` — UI logic for the options page

## Future features

- Implement URL Validation.


## License

This project is licensed under the **GNU General Public License (GPL) v3**.  
You are free to use, modify, and redistribute it, but any derivative work must also be licensed under GPL.

## About the Author

I'm a back-end software developer with complementary experience in front-end.  
I specialize in Java and Spring and am proficient with database engines such as PostgreSQL and MongoDB.  
For front-end development, I usually prefer the basic HTML/CSS/JS stack, though I also work with frameworks like Angular.

I enjoy creating small, simple applications that solve everyday problems.

I speak Spanish, English and Esperanto. I'm also a French beginner, currently in training.
