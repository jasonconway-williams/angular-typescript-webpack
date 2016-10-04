require("../../index");
var tester = require("./testercomponent");

describe('Test should be populted.', function () {

    it('Should not be null', function () {
        expect(tester).toBeDefined();
    });

    it('Name should be defined', function () {
           expect(tester.getName()).toBe('Jason');
        });
});