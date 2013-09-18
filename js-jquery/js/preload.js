/**
 * preload images
 *
 *
 * call this function after page load
 * either: <body onload="preloadImages();">
 * or: $(document).ready( function(){ preloadImages(); });
 *
 */

function preloadImages() {

    // an array of your images
    var imageList = [
        "image.gif",
        "example/image.jpg",
        "whatever/image.png"
    ];

    // loop thru array & create objects to preload
    var count = imageList.length;
    for(var i = 0; i < count; i++ ) {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
}

