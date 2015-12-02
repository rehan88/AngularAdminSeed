describe("homecontroller", function () {
    var controller;

    beforeEach(function () {
        bard.appModule("app.home");
        bard.inject("$controller");
        controller = $controller("homecontroller");
    });

    it("controller exists", function () {
        expect(controller).not.toBe(null);
    });

    it("controller has a title", function () {
        expect(controller.title).not.toBe(null);
    });

    it("controller title is Home", function () {
        expect(controller.title).toEqual("Home");
    });

    it("controller has introduction text", function () {
        expect(controller.introText).not.toBe(undefined);
    });

});