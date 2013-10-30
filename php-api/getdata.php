<?php

    // specify that api sends json
    header('Content-type: application/json');


    // allow other domains to access this api
    // header('Access-Control-Allow-Origin: *');


    // access api via javascript with:
    // http://localhost/web3class/php-api/getdata.php?foo=1

    // see if data is passed 
    if( empty( $_GET['foo'] ) ) { 
        // if not
        // echo '<p>error: no foo available.</p>';
        $choice = 1; 
        
    } else { 
        // if yes
        $choice = $_GET['foo']; 
        $choice = intval($choice); 
    }


    $data = array(
        array(
            "animal"=>"Cow",
            "meat"=>"Steak",
            "sound"=>"Moo",
            "count"=>3,
            "img"=>"https://upload.wikimedia.org/wikipedia/commons/f/fb/CH_cow_2.jpg"
        ),
        array(
            "animal"=>"Pig",
            "meat"=>"Bacon",
            "sound"=>"Oink",
            "count"=>2,
            "img"=>"https://upload.wikimedia.org/wikipedia/commons/3/3c/Pig_in_a_bucket.jpg"
        ),
        array(
            "animal"=>"Chicken",
            "meat"=>"Chicken",
            "sound"=>"Squawk",
            "count"=>1,
            "img"=>"https://upload.wikimedia.org/wikipedia/commons/5/54/Day_old_chick_black_background.jpg"
        ),
        array(
            "animal"=>"Sheep",
            "meat"=>"Lamb",
            "sound"=>"Baah",
            "count"=>2,
            "img"=>"https://upload.wikimedia.org/wikipedia/commons/2/2c/Flock_of_sheep.jpg"
        )
    );


    // send things back to the browser    
    echo json_encode($data[$choice]);


?>
