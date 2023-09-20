// this is for the quotes sliders

var n = 0; // the current quotes
var timerStop; // for the interval of the quotes
var quoteStrings = [
    '<h2>Negros Island, with an area of 13,328 km², is the 62nd largest island in the world and the 3rd in the Philippines.</h2>',
    '<h2>Major Languages in the Visayas include Ilonggo or Hiligaynon, Cebuano and Waray-waray.</h2>',
    '<h2>Region VI has 16 cities making it the region with the most cities in the Philippines with Iloilo City as its regional center.</h2>',
    '<h2>The provinces that comprised Western Visayas Region or Region VI are Aklan, Antique, Capiz, Guimaras, Iloilo and Negros Occidental.</h2>',
    '<h2>Name of Aklan province is linked with the Ati-Atihan festival held in Provincial capital of Kalibo.</h2>',
    '<h2>Antique is known as “Home of Sacadas” because it was a major source of migrant labor for the sugar cane fields of Negros Occidental</h2>'
];

/* get the quotes length
 * get the slides ID
 * and assign a variable */

 var stringLength = quoteStrings.length - 1;
 var quotesElement = $('#quotes');




// for the smooth scroll

    $(document).ready(function() {

        $('html, body').smoothScroll(2000);

        // show the first index of the quotes
        // when the page is loaded

        // $(quotesElement).slideUp();

        $(quotesElement).slideDown('slow');
        $(quotesElement).html(quoteStrings[n]);

        // every 10 seconds, the quotes will change
        stimerQuotes();

        // for the animations every scroll
        sal({
            once: false,
        });
    });




// for the toggle function in navigation bar

var navigation = $('.main-nav');
var toggleBurger = $('#js-navbar-toggle');

    // when the toggleBurger is clicked
    // it wil show the list of nav

    $(toggleBurger).click(function() {
        $(navigation).toggleClass('active');
    });


// every 2 seconds, the quotes will change
function nextQuote() {
    $(quotesElement).fadeOut();
    n += 1;

    if(n === stringLength + 1) 
        n = 0;
    
        $(quotesElement).html(quoteStrings[n]).fadeIn();
}

// stop the timer and go to the other quotes when clicked
$(quotesElement).click(function() {
    stopQuotes();

    nextQuote();
    stimerQuotes();
});

// will be called every 10 seconds for the quotes

function stimerQuotes() {
    timerStop = setInterval(function() {
        nextQuote();   
    }, 10000);
};



function stopQuotes() {
    clearInterval(timerStop);
};


// for the products click events
// when clicked they will go to other page

$('#product1').click(function() {
    window.location.href='./bukopie.html';
})

$('#product2').click(function() {
    window.location.href='./eggpie.html';
})

$('#product3').click(function() {
    window.location.href='./cashewtart.html';
})

$('#product4').click(function() {
    window.location.href='./chocotart.html';
})

$('#product5').click(function() {
    window.location.href='./driedmango.html';
})

$('#product6').click(function() {
    window.location.href='./jackfruit.html';
})
