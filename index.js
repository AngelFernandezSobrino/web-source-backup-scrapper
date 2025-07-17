// index.js
import scrape from 'website-scraper';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


let baseUrl = 'https://www.example.com';

let paths = [
    '/',
    // '/example-page',
    // '/another-page',
];

let urls = paths.map(path => baseUrl + path);

console.log(path.join(__dirname, 'results'));


// GET /web/carla-angel HTTP/2
// Host: www.bodas.net
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9
// Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate, br, zstd
// DNT: 1
// Sec-GPC: 1
// Connection: keep-alive
// Upgrade-Insecure-Requests: 1
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Priority: u=0, i

scrape({

    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: urls,

    // Specify the path where the content should be saved
    // In this case, in the current directory inside the results
    directory: path.resolve(__dirname, 'results/example.com'),

    request: {
        headers: {
            'Host': 'www.example.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:136.0) Gecko/20100101 Firefox/136.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9',
            'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'DNT': '1',
            'Sec-GPC': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Priority': 'u=0, i'
        }
    }

});
