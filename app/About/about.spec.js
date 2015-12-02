
describe("aboutcontroller", function () {
    var controller;

    beforeEach(function () {
        bard.appModule("app.about");
        bard.inject("$controller");
        controller = $controller("aboutcontroller");
    });

    it("controller exists", function () {
        expect(controller).not.toBe(null);
    });

    it("controller has a title", function () {
        expect(controller.title).not.toBe(undefined);
    });

    it("controller title is About", function () {
        expect(controller.title).toEqual("About");
    });

    it("controller has introduction text", function () {
        expect(controller.introText).not.toBe(undefined);
    });

});