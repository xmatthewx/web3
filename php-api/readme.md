php-api
=======

The project demonstrates creating a simple api. 


api.php
-------
This php generates a full html page. It uses $_get to insert values from the url into the page. 

 * Remember to open this file in your browser using localhost or a webserver.
 
* it includes header.php and footer.php
* it uses $_get to insert values from the url into the page
* localhost/.../php-api/api.php?bagel=popppy


index.php & getdata.php
------------------------

This simple page uses javascript to access data in getdata.php. 

 * you must change URL on line 12 to match your setup
 * there's an event listener in main.js: $('select').on('change')
 * this triggers getJSON
 * getJSON points to getdata.php sending 1,2, or 3 based on the selection
 * getdata.php returns data based on the number received
 * main.js displays the results

