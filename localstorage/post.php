<?php include 'header.php'; ?>

        <section class="container">

            <h1>My Facester</h1>

            <form id="draft">
                <label for="title">Title</label>
                <input id="title" name="title" placeholder="title">

                <label for="content">Content</label>
                <textarea id="content" name="content" placeholder="content"></textarea>
                
                <button>Post</button>
            </form>
            
            <p><a href="index.html">Home</a></p>
            
        </section><!-- // .container -->

        <section id="feed" class="container">
            
        </section>

<?php include 'footer.php'; ?>
