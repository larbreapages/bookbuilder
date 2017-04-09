describe('app', () => {
    before(async () => {
        await browser.url('http://0.0.0.0:8081');
    });

    it('should check title', async () => {
        const title = await browser.getTitle();
        assert.equal(title, 'Bookbuilder | L\'Arbre à Pages');
    });

    it('should select bookbinding', async () => {
        await browser.click('.gallery:last-child .zoom');
        await browser.click('.footer button:last-child');
    });

    it('should select color', async () => {
        await browser.click('.choices .choice:nth-child(2) img');
        await browser.click('.footer button:last-child');
    });

    it('should select format', async () => {
        await browser.click('.ant-radio-wrapper:nth-child(2)');
    });

    it('should choose page number', async () => {
        await browser.click('.ant-input-number-handler-up');
    });

    it('should enter gilding', async () => {
        await browser.setValue('#gilding', 'Test');
        await browser.click('.footer button:last-child');
    });

    it('should check terms', async () => {
        await browser.click('.ant-checkbox-wrapper .link');
        await browser.waitForVisible('.ant-modal-close', 3000);
        await browser.click('.ant-modal-close');
        await browser.waitForVisible('.footer button:last-child', 3000);
        await browser.click('.footer button:last-child');
    });

    it.skip('should fill personal informations', async () => {
        await browser.pause(3000);
        await browser.waitForVisible('iframe[name=stripe_checkout_app]', 10000);
        await browser.setValue('input[type=email]', 'test@yopmail.com');
        await browser.setValue('input[autocomplete=name]', 'John Doe');
        await browser.setValue('input[autocomplete=street-address]', '150 rue des jardins');
        await browser.setValue('input[autocomplete=postal-code]', '69000');
        await browser.setValue('input[autocomplete=address-level2]', 'Lyon');
        await browser.click('.footer button:last-child');
    });
});
