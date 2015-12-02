
describe("helpcontroller", function () {
    var controller;

    beforeEach(function () {
        bard.appModule("app.help");
        bard.inject("$controller");
        controller = $controller("helpcontroller");
    });

    it("controller exists", function () {
        expect(controller).not.toBe(null);
    });

    it("controller has a title", function () {
        expect(controller.title).not.toBe(undefined);
    });

    it("controller has a populated title", function () {
        var length = controller.title.length;
        expect(length).toBeGreaterThan(1);
    });


    it("controller title is Help", function () {
        expect(controller.title).toEqual("Help");
    });
  
});