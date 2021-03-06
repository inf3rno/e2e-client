const expect = require("chai").expect;
const e2e = require("./e2e");
const navigator = e2e.openWindow();

describe("navigator.load.remote", function () {

    it("should be able to load google.com without an issue", async function () {
        const googleMainPage = await navigator.load("https://www.google.com/");
        expect(googleMainPage.URL).to.match(/google\.com/);
    });

    /* skipped until #126 is resolved*/

    /*it("should throw navigation error by a non-existent domain", async function () {
        let wasErrorThrown = false;
        const invalidAddress = "http://www.qqqqqqqqqqq.net/";
        try {
            await navigator.load(invalidAddress);
        }
        catch (error) {
            wasErrorThrown = true;
        }
        expect(wasErrorThrown).to.equal(true);
     });*/


    after(function () {
        navigator.closeWindow();
    });
});