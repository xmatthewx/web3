
var hello = 'hello world';
console.log(hello);





/**
 * the DOM
 *
 */
console.log('**** the DOM *****')

var id = 'output';
document.getElementById('output').innerHTML= hello + '!';
document.getElementById(id).innerHTML = hello + '!';
    // note: object.function().attribute




/**
 * html object as var
 *
 */
id = 'output';
var output = document.getElementById(id);
console.log('output: ',output);
output.innerHTML = 'goodbye';





/**
 * the DOM & CSS
 *
 */
 // <img id ="cat" class=" fancy" alt="..." src="..." ... >
var cat = document.getElementById("cat");

    // html is an object
console.log(cat.alt);

cat.src="http://placedog.com/g/200/280";
cat.style.borderColor = "#f0f";
    // note: 
    // CSS >> border-color
    // JS  >> borderColor // camelCase
    // oye!

cat.className += ' fancy'; 
cat.className = cat.className + ' fancy'; 
    // += is shorthand to append
    // better to let CSS handle style
    // unless you playing with position etc


/**
 * objects gone wild
 *
 * EVERYTHING in Javascript is an object
 *
 */

console.log(cat.alt);

cat.alt = 'hello kitty';

cat.alt2 = 'whatever'; 
console.log(cat);

output.somestuff = cat.alt; 
    // this var is also an object
    // remember... output = document.getElementById(id);
    // no need to define somestuff

output.innerHTML = output.somestuff;





/**
 * browser & window
 *
 */

console.log('width: ',window.innerWidth);
console.log('useragent: ',navigator.userAgent);

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
    console.log('hi dogz');
    cat.oldsrc = cat.src;
    cat.src = 'http://placekitten.com/g/200/300';
};

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
    // console.log(src);

    if(src) { // is source empty?
        cat.src = src;
        
    } else {
        console.log('no dogs here');
    };
};


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
    // output.style.background = 'red';
    // outputFadein();
    // console.log(text);
}


/**
 * events on classes
 *
 */

var things = document.getElementsByClassName('thing');

for (var i = 0; i < things.length; i++) {

    // things[i].onclick = function() { };
    things[i].addEventListener('click', function() {

        // option A
        // this.innerHTML = 'x';
        
        // option B

        thingDo(this);

    }); // return false. prevent click from doing anything else. 

};

function thingDo(el){
    console.log('thing clicked');
    el.style.background = '#f0f';

    var text = el.innerHTML + ' clicked';
    outputText(text);

    this.innerHTML = 'x';

}




/**
 * forms
 *
 */

var box = document.getElementById('box');
box.onfocus = function(){
    console.log('box has focus');
    console.log(this); // this refers to element where event occurred
    
    if (!this.value) { this.value = 'dogs & cats' };

    output.innerHTML = 'enter any text please';
    catBack(cat.oldsrc);
}


var button = document.getElementById('submit');
submit.onclick = function(event){
    
    // event can pass things to your f(x) if you want
    console.log(event);
    console.log(event.screenX); // you can get mouselocation even without a click. 
    
    
    event.preventDefault(); // prevent link or button from doing anything else;
    
    button.innerHTML = box.value;
    box.value = 'again plz';
}



/**
 * delay: setTimeout
 *
 */

function outputFadein() {
    output.style.opacity = 1;
}

var outputDelay = window.setTimeout(outputFadein, 3000);
// output.style.opacity = 0;


/**
 * repeat: setInterval
 *
 */

function catBlink(){
    console.log('kitty time');
    cat.style.opacity = 0;
    var catDelay = window.setTimeout( function(){ cat.style.opacity = 1 }, 3000);
}

// var catTime = window.setInterval(catBlink,4000);

// cancel in another f(x) with...
// catTime = window.clearInterval(catTime);



/**
 * keystroke events
 *
 */

document.onkeydown = function(event){ 
    // console.log(event);

    var key = event.keyCode;
    // console.log(key);

    // q
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

console.log(b);




c = b + a;
c += 1;

console.log('c: ',c);


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

greeting = greeting.replace("hi", "<b>goodbye</b>"); // double quotes?? html.
greeting = greeting.toUpperCase();
console.log('greeting: ', greeting);
console.log('length: ',greeting.length );



var kafka = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me? he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor";
kafka = kafka.split(' '); // split string at space to create array
console.log(kafka[14]);
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
var test3 = 3 + 4 + parseInt('5');
    

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
console.log( '1' == true ); 

console.log( '1' === 1 ); // === strict
console.log( '1' === true ); 
 





/**
 * arrays
 *
 */
console.log('*** arrays, yay! ***');

var animals = ['cow', 'chicken', 'duck'];
animals.push('lamb');
animals[99] = 'sheepdog';

console.log(animals);
console.log(animals.length);
console.log(animals[2]);


var farm = ["vegetables", animals, "fruits"];

console.log(farm);
console.log(farm.length);
console.log(farm[1]);
console.log(farm[1][1]);
console.log(farm[0][2]); // g? what???!!!!



/**
 * globals and namesapce
 *
 */



elephant.init;

elephant = function(){
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
    // i would only use this for short and simple cases
