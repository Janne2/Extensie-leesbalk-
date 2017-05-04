
// Wanneer we op de knop klikken van de extensie:
chrome.browserAction.onClicked.addListener(function(tab) {
    // veel van de acties in Chrome extensies zijn a-synchroon, dat wil zeggen dat als je de volgende regel lanceert,
    // het nog niet duidelijk is of de eerste actie al afgerond is.
    // Dat is een probleem voor ons, omdat we pas het script willen runnen als jquery geladen is
    // (en als de css geladen is).
    // De oplossing is een ‘callback functie’: we geven een functie mee die uitgevoerd wordt als de vorige functie
    // afgelopen is.
    chrome.tabs.insertCSS(null, {file: "style.css"}, function() {
        chrome.tabs.executeScript(null, {file: "jquery.min.js"}, function() {
           // chrome.tabs.executeScript(null, {file: "name-of-your-jquery-ui-file.js"}, function() { <-- adapt filename
                chrome.tabs.executeScript(null, {file: "beweging.js"});
           // }); <-- remove the comments when adding jquery ui
        });
    });
});
