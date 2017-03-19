import { assert } from 'chai';
import express from 'express';
import path from 'path';
import * as webdriverio from 'webdriverio';

let listeningServer;

const options = {
    browserName: 'phantomjs',
    port: 8081,
    logLevel: process.env.TRAVIS ? 'command' : 'silent',
};

before(() => {
    const server = express();
    server.use('/', express.static(path.join(__dirname, '../dist')));
    listeningServer = server.listen(options.port);

    const client = webdriverio.remote({
        desiredCapabilities: { browserName: options.browserName },
        logLevel: options.logLevel,
    });

    global.browser = client.init();
    global.assert = assert;

    return browser;
});

after(() => {
    listeningServer.close();
    browser.end();
});
