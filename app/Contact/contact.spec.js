
describe("contactcontroller", function () {
    var controller;

    beforeEach(function () {
        bard.appModule("app.contact");
        bard.inject("$controller", "$mdDialog");
        controller = $controller("contactcontroller");
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

    it("controller title is Contact us", function () {
        expect(controller.title).toEqual("Contact Us");
    });

    it("controller has a name placeholder", function () {
        expect(controller.namePlaceholder).not.toBe(undefined);
    });

    it("controller has a populated name placeholder", function () {
        var length = controller.namePlaceholder.length;
        expect(length).toBeGreaterThan(1);
    });

    it("controller has an email placeholder", function () {
        expect(controller.emailPlaceholder).not.toBe(undefined);
    });

    it("controller has a populated email placeholder", function () {
        var length = controller.emailPlaceholder.length;
        expect(length).toBeGreaterThan(1);
    });

    it("controller has a comment placeholder", function () {
        expect(controller.commentPlaceholder).not.toBe(undefined);
    });

    it("controller has a populated name placeholder", function () {
        var length = controller.commentPlaceholder.length;
        expect(length).toBeGreaterThan(1);
    });

    it("controlelr must have intro paragraph", function () {
        
    });

});