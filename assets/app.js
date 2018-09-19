var topics = [
 'basketball','football', 'lebron', 
 'jordan','wwe','touchdown',
 'baseball', 'packers', 'browns','badgers'
]

var button;

var image; 


function makeButtons(){

        for (var i = 0; i < topics.length; i++) { 
            var buttons = $('<button>'+ topics[i] + '</button>') 
            buttons.attr("data-name", topics[i]);
            buttons.appendTo('#buttonsCreated'); 
        } 
    }
makeButtons()

//giphy API Key: DfxVNP0QVOUbjAA2V767b3bwKTQV4m8w
//Click listener 
// Click listner needs to grab the data from the button clicked. Search for the data term associated 
//with the button I've created. NO, I am searching for the button name ie. search for LeBron on Giphy.  

$("button").on("click", function() {
    var term = $(this).attr("data-name");

    
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      term + "&api_key=DfxVNP0QVOUbjAA2V767b3bwKTQV4m8w";
    

      $.ajax({
    url: queryURL,
    method: "GET",
}).then(function(reponse) {
    console.log(reponse);


    var results = reponse.data;

    for (var i = 0; i <results.length; i++) {
        
        var giphDiv = $("<div>");

        var rating = $("<p>").text("Rating: ") + results[i].rating;

        var image = $("<img>");

        
    };

})
});