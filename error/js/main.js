


var foo = $('#foo');

// problem: CSS dash
foo.css('background-image','xyz.jpg');
foo.css('backgroundImage','xyz.jpg'); // camel case in JS


// problem: quotes in quotes
foo.css('background','red url('xyz.jpg') top left no-repeat'); 
foo.css('background',"red url('xyz.jpg') top left no-repeat"); // double, single quotes
foo.css('background','red url(\'xyz.jpg\') top left no-repeat'); // escape


// problem: passing semicolon; in style
foo.css('background',"url('xyz.jpg');"); 
foo.css('background',"url('xyz.jpg')"); // no semicolon


// problem: var name as string
var img = 'xyz.jpg';
foo.css('background',"url('img');"); 
foo.css('background',"url('"img"');");
foo.css('background',"url('" + img + "');"); // adding string + var


// problem: an event listener cannot be attached to an html element that doesn't exist yet. 
// you can attached it after you create the element, or...
// or... you can use jquery to listen on a container or the body. 
$('.container').on('click', '.widget', function(){ });


// problem: listeners on a class aren't useful if we don't know which invididual element was the source
// you need to use Javascript's this to target the element.
$('.container').on('click', '.widget', function(){ 
    $(this).text('xyz'); // element clicked
    console.log( $(this).attr('id'); )
});


