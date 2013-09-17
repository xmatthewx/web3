
/**
 * setup dots
 */

var count = 1200;

var dot = document.getElementById('dotTemplate'); // js
    dot = $('#dotTemplate'); // jquery

var dots = []; // an empty array to hold all the dots


/**
 * get random percent for position
 *
 */
function randomPercent(){    
    var p = Math.random() * 100;
    return p + '%';
};


/**
 * make random dots
 *
 */

function dotsInit(count,callback){
    
    // loop to make dots
    for(var i=0; i < count; i++  ){

        // grab random percents

        // clone dot template

        // give new dot an id & position

        // add dot to dots array

    }

    // run function passed to...
    // dotsInit(count,CALLBACK);
    callback();
    
}


/**
 * display dots
 * add event listener
 */
function dotsAppend(){
    // remove template. add dots.

    // add event listener

}


/**
 * move dot
 *
 */
function dotAction(dot){
    // set left & top position

}


/**
 * init dots
 *
 */
dotsInit(count,dotsAppend);



