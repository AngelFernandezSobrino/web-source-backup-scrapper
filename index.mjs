// index.js
import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import { resolve } from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let basePath = 'http://inseleg.net';

let endpoints = [
    '',
    '/nosotros',
    '/mantenimientos',
    '/galeria',
    '/contacto',
    '/instalaciones',
    '/servicios1/index',
    '/servicios1/controlautomatización',
    '/servicios1/hvac',
    '/servicios1/salas-blancas'
]

let urls = endpoints.map((endpoint) => basePath + endpoint);

scrape({
    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: urls,
    // Specify the path where the content should be saved
    // In this case, in the current directory inside the ourcodeworld dir
    directory: resolve(__dirname, 'data/inseleg'),
    // Load the Puppeteer plugin
    plugins: [
        new PuppeteerPlugin({
            launchOptions: {
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 10000,
                viewportN: 10
            } /* optional */
        })
    ]
});
