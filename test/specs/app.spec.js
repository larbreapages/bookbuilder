describe('app', () => {
    it('title', async () => {
        await browser.url('http://0.0.0.0:8081');

        const title = await browser.getTitle();
        assert.equal(title, 'Bookbuilder | L\'Arbre à Pages');
    });
});
