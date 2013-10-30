

/**
 * get data from our api
 * uses getdata.php
 */

function loadData(choice) {
    console.log('loadData...');
    
    // point to our api
    var url = '/web3class/php-api/getdata.php?foo=' + choice;

    $.getJSON(url, function (data) {
        console.log(data);

        item = '<h2>' + data.animal + '</h2><img src="' + data.img + '"><p>' + data.meat + '</p>' + '</a>';
        $('#results').html(item);

    }) // END .getJSON() // notice no semi-colon ...
    .error( function(){
        console.log('there was an error');
    })
    .done(function ( ) { // run these things after ajax is done
        console.log('ajax is done');
    }); // END .done()

};


/**
 * trigger data from api on select
 *
 */

$('select').on('change',function(){
    console.log('selection made');
    var choice = $( "select option:selected" ).val()
    // console.log(choice);
    loadData(choice);
    
});

