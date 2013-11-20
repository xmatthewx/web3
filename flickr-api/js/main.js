

/**
 * button to trigger data from api
 *
 */
 
$('#startajax').on('click', function(event) {
    event.preventDefault();
    console.log('button clicked');
    $('#startajax').text('loading...').attr("disabled", "disabled");
    loadData();
});



/**
 * get data via API
 *
 */

function loadData() {
    console.log('loadData()');

    var items = [];

    // var url = 'http://site.com/api/uri';

    var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
//    var url = 'http://site.com/api/xyz';
    
    // flickr's docs
    // https://secure.flickr.com/services/feeds/

    var parameters = {
        tags: "design,technology",
        tagmode: "all",
        format: "json"
    };


//    $.ajax() // get pizza
//    $.getJSON() // get pepperoni pizza or xml pizza or json pizza
//    $.getJSON(url, function (data) { // with parameters

    $.getJSON(flickerAPI, parameters, function (data) { // with parameters
        
        console.log('success! we got data: ');
        console.log(data);

        $.each(data.items, function (key, val) {

            console.log(key, val);
            items.push('<li id="flickr' + key + '" >' + val.title + '<img src="' + val.media.m + '" >' + val.description + '</li>');

            var tags = val.tags; // grab tags
            var tags = tags.split(" "); // split into an array
            var tag3 = tags[2]; // grab 3rd item
            
        }); // END .each()

        // add html to the page
        var output = items.join('');
        $('#results').html('<ul>' + output + '</ul>');


    }) // END .getJSON() // notice there's no semi-colon ...
    .done(function() {
        console.log( "second success! getJSON is done." );
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    })    
    .always(function() {
        // run this stuff after, regardless of success or failure
    });

}; // END loadData()


