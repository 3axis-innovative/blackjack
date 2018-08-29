// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});



// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function () {

    console.log("jsworking");
    // Get page data from event data
    var page = e.detail.page;

    //Suit input event handling


    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
});