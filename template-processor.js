'use strict';
function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
    return this.template.replace(/{{(.*?)}}/g, (match, property) => {
        return dictionary.hasOwnProperty(property) ? dictionary[property] : '';
    });
};

// Example usage:
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);

console.assert(
    str === 'My favorite month is July but not the day 1 or the year 2016',
    'Test 1 Failed'
);

//Case: property doesn't exist in dictionary
var dictionary2 = { day: '1', year: '2016' };
var str2 = dateTemplate.fillIn(dictionary2);

console.assert(
    str2 === 'My favorite month is  but not the day 1 or the year 2016',
    'Test 2 Failed'
);
