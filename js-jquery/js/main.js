
/**
 * setup dots
 */

var count = 12;

//var dot = document.getElementById('dotTemplate'); // js
var dot = $('#dotTemplate'); // jquery

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
        var x = randomPercent(); // '64%'
        var y = randomPercent();

        // clone dot template
        var tmp = dot.clone();
        
        // give new dot an id & position
        // tmp = <div id="dotTemplate" class="dot"></div> 
        tmp.attr('id','dot' + i) // jquery
            .css('left',x)            
            .css('top',y);
        // tmp = <div id="dot57" class="dot" style="left:65%;"></div> 

        // add dot to dots array
        dots.push(tmp);
        // console.log(tmp);
        // console.log(dot);
        // console.log(dots);

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
    // console.log('append');
    $('#dotTemplate').remove();
    $('#dot-canvas').append('hello mom'); // jquery
    $('#dot-canvas').append(dots); // jquery
    
    // add event listener
    // $('.dot').on('mouseenter',function(event){ dotAction(this) }); // listen to class
    $('#dot-canvas').on('mouseenter','.dot',function(event){ // listen to container, apply to class 
        // this = event's object origin 
        console.log(event);
        console.log(event.clientX);
        dotAction(this);  
    }); 
}



/**
 * example alert msg
 *
 *click >> 
 *var msg = "don't do that";
 *alertuser(msg);
 */

function alertuser(msg){
    $('#alertbox').append(msg).show();
    $('#alertbox').append(msg).fadeIn();
    $('#alertbox').html('<p>x</p>').fadeIn();
    $('#alertbox').text('<p>x</p>').fadeIn();
}


/**
 * move dot
 *
 */
function dotAction(dot){
    // set left & top position
    console.log('hover: ',dot.id);
    dot.style.left = '50%';
    dot.style.top = '50%';
}


/**
 * init dots
 *
 */
dotsInit(count,dotsAppend);


























