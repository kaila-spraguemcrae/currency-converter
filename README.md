# Currency Converter

#### This application will convert USD into other currencies using ExchangeRate API, 11.20.2020

#### By _**Kaila Sprague McRae**_

## 🚩 Description

This application is created for week 6 at Epicodus. It is designed to allow a user to convert USD into another currency using ExchangeRate API. 

## 🔧 Setup/Installation Requirements

### Necessary Specifications

- To run this project locally you will need to have node. You can check if you have node by running `node -v` in the command line. If you do not have node please find more information and download [here](https://nodejs.org/en/download/)

- You will also need to have an ExchangeRate API Key. To get this you will need to request a Key [here](https://www.exchangerate-api.com/).

### Open Locally

Go to my GitHub repository here, [https://guthub.com/kaila.spraguemcrae/currency-converter](https://guthub.com/kaila.spraguemcrae/currency-converter), and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file

##### To clone:
1. Push the green 'Clone' button and copy the URL.
2. Open Terminal or GitBash and input the command: `git clone https://github.com/kaila-spraguemcrae/currency-converter`
3. To view the code, open the copied directory with Visual Studio Code or your preferred text editor by inputing the command `code .` in your terminal.
4. To view the website, open index.html in Chrome or your preferred browser.

### Running a functioning environment:

1. Run `npm install` in terminal to gain access to webpack.
2. Create a `.env` file in the root directory.
3. Save your API key in the `.env` by inputting `API_KEY= {Your API Key}`.
4. Input `npm run start` to view the live server for the application.

## Specs

<details>

| Test | Input | Output |
| :------------- | :------------- | :------------- |
| **ConvertCurrency()**|||
| Should convert inputted USD currency into selected currency| 10 USD | 1039.22 JPY |
| Should convert any currency into another currency|1000 JPY | 8.12 EUR |

</details>

## 🐛 Known Bugs

11.20.2020: No known bugs at this time

## 📫 Support and contact details

If you run into any problems or have any questions please contact me via [email](mailto:kaila.sprague@icloud.com).

## 🛠️ Technologies Used

This project uses the following technologies:

- ExchangeRate-API
- JavaScript
- JQuery
- Bootstrap
- Webpack
- npm

## 📘 License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 Kaila Sprague McRae