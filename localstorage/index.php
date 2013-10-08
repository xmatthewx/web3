<?php include 'header.php'; ?>


    <section class="container">
        <h1>My Facester</h1>

    </section><!-- // .container -->

    <section id="feed" class="container clearfix">
        
    </section>

    <section class="container">
        <ol>
            <li><?php echo 'PHP inside of HTML'; ?></li>

            <?php echo '<li>HTML inside of PHP</li>'; ?>

            <li>
                <?php
                    echo 'cat says: '; 
                    echo $page;
                ?>
            </li>

            <li>
                <?php
                    echo 'dog says: '.$page; 
                ?>
            </li>

        </ol>
    </section>

<?php include 'footer.php'; ?>