<!DOCTYPE html>
<html class="no-js">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>

    <?php

        // Get Page Name from URL
        // set as Class on the Body
        
        $url = $_SERVER['REQUEST_URI']; // get page's URL (results: /web3class/localstore/index.php)
        $path = '/web3class/localstorage/'; // change to your path after localhost

        $page = str_ireplace($path,'',$url); // remove path (results: index.php)
        $class = str_ireplace('.php','',$page); // remove .php (results: index)

    ?>

    <body class="<?php echo $class; ?>">
        <header>
            <nav>
                <a href="index.php">Home</a>
                <a href="post.php">Post</a>
            </nav>
        </header>
        