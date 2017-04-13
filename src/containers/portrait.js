const messages = require('../messages')

import Button from '../components/button';
var images = require('../image');

class PortraitPage {

    constructor() {
        this.button = new Button('btnPortrait', 'Portrait');

        
        this.runtime_environment = DEVELOPMENT ? "Dev": "Production"
    }

    render() {

        var newMessage = () => (`<p>${messages.hi}, ${messages.event}</p>`);

        return `<h1>${this.runtime_environment}</h1>
                <div class="redbox">
                    <p>${newMessage()}</p>
                    ${images.portraitImage}<br />
                    ${images.smallpicImage}<br />
                    ${this.button.render()}
                </div>`;
    }

    eventListeners() {
        this.button.click(function() { alert('do portrait')});
    }
}

export default PortraitPage;