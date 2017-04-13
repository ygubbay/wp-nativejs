var assert = require('assert')
import 'babel-polyfill'
import LoginPage from '../src/containers/login';



describe('getAnimals', () => {
    it('works in the basic case', () => {
        
    })
})


describe('check loginPage', () => {
    it('check loginPage initializes', () => {

        var page = new LoginPage();
        assert.notEqual(page, undefined);
    })
})