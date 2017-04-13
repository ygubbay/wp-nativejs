

var style = require('./styles/globalStyle.css');
require('./styles/globalLess.less');


import LoginPage from './containers/login';
import PortraitPage from './containers/portrait';


var app = document.getElementById('app');
if (true) {

    const portraitPage = new PortraitPage();
    app.innerHTML = portraitPage.render();
    portraitPage.eventListeners();
}
else {
    const loginPage = new LoginPage();
    app.innerHTML = loginPage.render();   

}


if (module.hot)
{
    module.hot.accept();
}