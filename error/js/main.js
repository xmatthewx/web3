


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
