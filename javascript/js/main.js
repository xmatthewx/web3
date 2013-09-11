
var hello = 'hello world';
console.log(hello);





/**
 * the DOM
 *
 */
console.log('**** the DOM *****')

var id = 'output';
document.getElementById(id).innerHTML= hello + '!';
    // note: object.function().attribute




/**
 * html object as var
 *
 */

id = 'output';
var output = document.getElementById(id);
output.innerHTML = 'goodbye';
console.log('output...........');
console.log(output);




/**
 * the DOM & CSS
 *
 */

  // <img id ="cat" ... >
 var cat = document.getElementById("cat");

     // html is an object
 console.log(cat.src);




/**
 * objects gone wild
 *
 * EVERYTHING in Javascript is an object
 *
 */

 console.log(cat.alt);

 cat.alt = 'hello kitty';

 output.somestuff = cat.alt; 
     // this var is also an object
     // remember... output = document.getElementById(id);
     // no need to define somestuff

 output.innerHTML = output.somestuff;
 // outputText(output.somestuff);





/**
 * browser & window
 *
 */

console.log('width: ',window.innerWidth);
console.log('useragent: ',navigator.userAgent);

// cat.style.height = "456px";




/**
 * fix broken things
 * console will quickly point toward your problem
 */

// function ()



/**
 * functions
 *
 */

     // define the function
function changeOutput() {

     output.innerHTML = 'kitty says hello & goodbye';

}

changeOutput(); // run the function






/**
 * events
 *
 * http://www.w3schools.com/jsref/dom_obj_event.asp
 *
 */

function catDog() {
     cat.oldsrc = cat.src;
     cat.src = 'http://placedog.com/g/200/300';
 };

// event listener
cat.onclick = function(){ 
     console.log('cat clicked');
     catDog(); 
 };

// cat.dataset.hello = 'hi mom'; // dataset stuff shown in html source







/**
 * pass an argument to f(x)
 *
 */

function catBack(src) {
     console.log(src);

     // if(!src) {}
     // if(src == "http://asdf.com/asd/asdf") {}
     if(src) {
         cat.src = src;
         }
     else {
         console.log('no dogs here');
         };
}


cat.onmouseout = function() {
 console.log('cat hover out');

 catBack(cat.oldsrc);

}






/**
 * DRY: don't repeat yourself
 *
 */

function outputText(text) {
 output.innerHTML = text;
 output.style.opacity = '1';
 // outputFadein();
 console.log(text);
}






/**
 * events on classes
 *
 */


var things = document.getElementsByClassName('thing');
console.log('things: ',things);
console.log(things[1].innerHTML);
// for (var i = 0; i < things.length; i = i + 1 ) {
for (var i = 0; i < things.length; i++) {

     // cat.onclick = function(){ ... }
     // things[0]     // things[1]
     things[i].addEventListener('click', function() {

         // option A
         // cat.innerHTML = 'x';
         // this.innerHTML = 'x';

         // option B
         thingDo(this);

     }); // return false. prevent click from doing anything else. 

};

 function thingDo(el){
     console.log('thing clicked');
     
     // 'this' was created by the event
     // represents object that was clicked
     // object was sent here 
     // received as 'el' 
     el.style.background = '#f0f';

     var text = el.innerHTML + ' clicked';
     outputText(text);


 }







/**
 * forms
 *
 */







/**
 * delay: setTimeout
 *
 */






/**
 * repeat: setInterval
 *
 */






/**
 * keystroke events
 *
 */

document.onkeydown = function(event){ 
    // console.log(event);
    
    var key = event.keyCode;
    // console.log(key);
    
    if( key == 81 ) { outputText('Quit?'); }
    
}


/**
 * numbers, operators
 *
 */
console.log('**** numbers ******');


var x;
var y, z;
var a = 1, 
    b = a,
    c;

c = b + a;
c += 1;

console.log('c',c);

console.log(b / c); 



/**
 * Math
 *
 * http://www.w3schools.com/jsref/jsref_obj_math.asp
 *
 */

var roundint = Math.round(346.974)
console.log('rounded: ',roundint); 

var anything = Math.random();
console.log('random: ',anything); // 
console.log('random & rounded: ',Math.floor(anything * 1000) ); // 



/**
 * strings, vars
 *
 */
console.log('**** strings & vars ******');


var hello = 'hi',
    world = 'globe';

var greeting = hello + ' ' + world;

console.log('greeting: ', greeting);




/**
 * do things to strings
 *
 * http://www.w3schools.com/jsref/jsref_obj_string.asp
 * http://www.w3schools.com/jsref/jsref_obj_array.asp
 *
 */

greeting = greeting.replace("hi", "goodbye"); // double quotes?? html.
console.log('greeting: ', greeting);
console.log('length: ',greeting.length);



var kafka = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me? he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor";
kafka = kafka.split(' '); // split string at space to create array
kafka = kafka.sort(); // sort array
console.log(kafka);
kafka = kafka.toString(); // make it a string



/**
 * numbers vs strings
 *
 */

// "4" NaN !!

var test1 = "3" + 4 + 5,
    test2 = 3 + 4 + "5";
    test3 = 3 + 4 + parseInt('5');
    

console.log('test: ' + test1,test2,test3);



/**
 * comparisons
 *
 * note: this is boring but it will mess you up
 *
 */

console.log('*** comparisons ***');
console.log('<, >, <=, >=');

console.log( 'cat' == 'dog' ); // single equal sign assigns a value to a var

console.log( '1' == 1 ); // == compare across types
console.log( '1' == true ); // returns true
console.log( '0' == false ); 

console.log( '1' === 1 ); // === strict, return false
console.log( '1' === true ); // return false
 





/**
 * arrays
 *
 */
console.log('*** arrays, yay! ***');

var animals = ['cow', 'chicken', 'duck'];
animals.push('lamb');

console.log(animals);
console.log(animals.length);
console.log(animals[2]);


var farm = ["vegetables", animals, "fruits"];

console.log(farm);
console.log(farm.length);
console.log(farm[1]);
console.log(farm[1][1]);



/**
 * globals and namesapce
 *
 */



/*
myNameSpace = function(){
  var current = null;
  function init(){ }
  function change(){ }
  function verify(){ }
  return{
    init:init,
    change:change
  }
}(); 
// */




/* "Classes"
 *
 */


function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}
function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

var me = new Person("Matthew", "Willse");

console.log(me);
console.log(me.first);
console.log(me.fullNameReversed());





/**
 * optimize your loops
 *
 */

var names = ['George','Ringo','Paul','John'];
for(var i=0, j=names.length; i<j; i++){
    // read the length only once, not every iteration
    // doSomeThingWith(names[i]);
}




/**
 * preset value
 *
 */
var victor;
if(victor){
    var xtra = victor;
} else {
    var xtra = 10;
}
 
var xtra = victor || 10;
console.log('xtra: ',xtra);



/**
 * switch (multi if else if)
 *
 */

var xyz= 'yes', foo;

switch (xyz) {
    case 'no':
        foo="It won't happen";
        break;
    case 6:
        foo="Today it's Saturday";
        break;
    case 'yes':
        foo="Monkeys will fly.";
        break;
    default:
        foo="Looking forward to the Weekend";
}
console.log('switch: ',foo);



/**
 * conditional shorthand
 *
 */

var direction;
if(x > 100){
    direction = 1;
} else {
    direction = -1;
}

var direction = (x > 100) ? 1 : -1;
    // keep your code readable
    // i would only use this for short and simple cases
