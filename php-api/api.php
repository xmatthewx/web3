<?php include 'header.php'; ?>

<?php
    // GET variables
    // http://mysite.com/api.php?bagel=poppy&moop=bloopers

    // see if data passed 
    if( empty( $_GET['bagel'] ) ) { 
        // if not
        echo '<p>error: no bagel available.</p>';
    } else { 
        // if yes
        $bagel = $_GET['bagel']; 
    }

    if( empty( $_GET['moop'] ) ) { // see if data passed 
        echo '<p>error: no moop available.</p>';
    } else { 
        $moop = $_GET['moop']; 
    }


?>

    <section class="container">
        <h1>My API</h1>
        <h2><?php if( $bagel ) { echo $bagel; } ?></h2>
        <h2><?php if( $moop ) { echo $moop; } ?></h2>
    </section>

    <section class="container">
        <ol>
            <li><?php echo 'PHP inside of HTML'; ?></li>

            <?php echo '<li>HTML inside of PHP</li>'; ?>

            <li>
                <?php
                    echo 'cat says: '; 
                    echo $moop;
                ?>
            </li>

            <li>
                <?php
                    echo 'dog says: '.$bagel; 
                ?>
            </li>

        </ol>
    </section>

<?php include 'footer.php'; ?>