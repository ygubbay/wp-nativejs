
const portrait = require('./images/portrait.jpg')
//const portraitImage = `<img src="${portrait}" />`;
const portraitImage = '<img src="' + portrait + '" />';

const smallpic = require('./images/smallpic.jpg')
const smallpicImage = '<img src="' + smallpic + '" />';

module.exports = { 
    portraitImage: portraitImage,
    smallpicImage: smallpicImage 
};