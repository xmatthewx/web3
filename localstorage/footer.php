
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>

        <script>
        <?php
            // note: this is a silly way to use php to mark the active page in the menu
                // demo to better understand frontend & backend code execution
            
            // add some JS based on code generated by PHP
            // using $page defined in header.php

            // use jquery to add a class to a specific menu link
            // $('header a[href="post.php"]').addClass('active');

            $href = 'href="'.$page.'"';            
            echo "$('header a[".$href."]').addClass('active');";
            // echo "$('header a[href=post.php]').css('color','green').addClass('active');"
            // echo "$('header a[href=\"".$page."\"]).css('color','red').addClass('active');"
        
        ?>
        </script>
    </body>
</html>
