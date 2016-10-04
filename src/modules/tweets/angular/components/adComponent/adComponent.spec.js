import AdComponent from './adComponent';
// var AdComponent = require('./adComponent');
describe('Test the ad component', function () {

    var adComponent = new AdComponent();

    it('The component should be populated.', function () {
        expect(adComponent).toBeDefined();
    });

    it('The name should be correct', function () {
        expect(adComponent.getName()).toBe('Jason');
    });
});