<?php
  include 'db.php';

  class Menu extends database{
    function showLeftMenu(){
      $mysqli = mysqli_connect($this->host, $this->user, $this->pass, $this->name);
      $sql = "SELECT menuName, contentLink FROM leftMenu";
      $query = $mysqli->query($sql);
      if($query->num_rows > 0){
        while ($row = $query->fetch_assoc()) {
          echo '<div class="content hvr-bounce-to-right" onclick="'.$row['contentLink'].'">'.$row['menuName'].'</div><br>';
        }
      }
      else{
        echo '<div class="content hvr-bounce-to-right">Home</div><br>';
      }
    }

    function showHome(){
      $mysqli = mysqli_connect($this->host, $this->user, $this->pass, $this->name);
      $sql = "SELECT * FROM home";
      $query = $mysqli->query($sql);
      if($query->num_rows > 0){
        echo '<header class="slideshow-container">';
        while ($row = $query->fetch_assoc()) {
          echo '<section class="Slides fadeOut" style="display: none;">
    		    <img src="'.$row['image'].'" style="width:100%">
    		  </section>';
        }
        echo '</header>';
      }
      else {
        echo "error";
      }
    }

    function collectTextAboutUs(){
      $mysqli = mysqli_connect($this->host, $this->user, $this->pass, $this->name);
      $sql = "SELECT * FROM aboutUsText";
      $query = $mysqli->query($sql);
    }

    function showAboutUs(){
      echo '<nav id="aboutUsWrap">
        <div class="hvr-shutter-in-vertical aboutMenu" onclick="showVision()">Vision and Mission</div>
        <div class="hvr-shutter-in-vertical aboutMenu" onclick="showWhy()">Why Us?</div>
        <div class="hvr-shutter-in-vertical aboutMenu" onclick="showFacilities()">Our Facilities</div>
      </nav>
      <section class="wrapFigure" id="wrapFigure">
    	 <img src="img/figure/img2.jpg" class="" id="figure1" onclick="figure1()">
       <img src="img/figure/secondary.jpg" class="" id="figure2" onclick="figure2()">
       <img src="img/figure/primary.jpg" class="" id="figure3" onclick="figure3()">
       <img src="img/figure/pyp.jpg" class="" id="figure4" onclick="figure4()">
    	</section>
      <section class="text">
        <div id="vision" class="contentComingIn">
          <h1>Vision and Mission</h1>
          <h2>Mission</h2>
          <p>To develop and shape future citizens and leaders of tomorrow
          through academic excellence, creative thinking, self-responsibility and
          personal discipline.</p>
          <h2>Vision</h2>
          <p>Students will become lifelong learners through the natural
          inquisitiveness of a child; rich in skills that seek understanding and
          meaning; attitudes that will respect and appreciate the cultures of
          this world.</p>
        </div>
        <div id="why" class="contentComingIn">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div id="facilities" class="facilities">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
          commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
          quo voluptas nulla pariatur?
        </div>
        <div class="figure1">

        </div>
        <div class="figure2"></div>
        <div class="figure3"></div>
        <div class="figure4"></div>
      </section>';
    }
  }

?>
