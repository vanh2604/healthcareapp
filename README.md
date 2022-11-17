# Healthcare app

## Prerequisites
To make the app run correctly, you must have these packages installed:
- [Node](https://nodejs.org/en/) version: >= 18.12.1
- [npm](https://www.npmjs.com/) version: >= 9.1.1

## Features/packages included

- [TypeScript](https://www.typescriptlang.org/) - Type checker.
- [Tailwindcss](https://tailwindcss.com/) - Build layout & components.
- [React-chartjs](https://react-chartjs-2.js.org/) - Build chart
- [axios](https://github.com/axios/axios) - Promise based HTTP client.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) - Coding convention.
- [husky](https://typicode.github.io/husky/#/) - pre-commit hook.

## Step to run

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://www.npmjs.com/package/yarn) to install all package needed.

```
npm install
```

Run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm run start
```

## About project
- I used [my-json-server](https://my-json-server.typicode.com/) - for fake api server. you can visit [this repo](https://github.com/vanh2604/healcaredb) i create to check the json database 
- Some data in my project such as chart data is hard-coded
- There are three route "/" ,"/health", "/record". You can navigate to different page by using the navbar
