describe("userscontroller", function () {
    var controller;

    beforeEach(function () {
        bard.appModule("app.users");
        bard.inject("$controller");
        controller = $controller("userscontroller");
    });

    it("controller exists", function () {
        expect(controller).not.toBe(null);
    });

    it("controller has a title", function () {
        expect(controller.title).not.toBe(null);
    });

    it("controller title is Users", function () {
        expect(controller.title).toEqual("Users");
    });

    it("controller users dats us not null", function () {
        expect(controller.myData).not.toBe(undefined);
    });

    it("controller users data should contain Lorraine", function () {
        var userFirstName = controller.myData[1].firstName;
        expect(userFirstName).toEqual("Lorraine");
    });

});