import { assert } from 'chai';
import express from 'express';
import path from 'path';
import * as webdriverio from 'webdriverio';

let listeningServer;

const options = {
    browserName: process.env.TRAVIS ? 'phantomjs' : 'chrome',
    port: 8081,
    logLevel: process.env.TRAVIS ? 'command' : 'silent',
};

before(() => {
    const server = express();
    server.use('/', express.static(path.join(__dirname, '../../dist')));
    listeningServer = server.listen(options.port);

    const client = webdriverio.remote({
        desiredCapabilities: { browserName: options.browserName },
        logLevel: options.logLevel,
    });

    global.browser = client.init();
    global.assert = assert;

    if (process.env.RESOLUTION) {
        const [width, height] = process.env.RESOLUTION.split('x');
        global.browser.setViewportSize({ width: Number(width), height: Number(height) });
    }

    return browser;
});

after(async () => {
    listeningServer.close();
    await browser.end();
});
