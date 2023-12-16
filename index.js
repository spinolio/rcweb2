let myName = 'Esteban';
fetch('https://rcbattery.com').then(function (response) {
    // The API call was successful!
    return response.text();
}).then(function (html) {

    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    console.log('parsed %d bytes', html.length);
    document.getElementById("parsedBytes").innerHTML = "Update: Parsed " + html.length + " bytes!";

}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});
