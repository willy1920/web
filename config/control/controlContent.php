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

    function showAboutUs(){
      echo '<nav>
        <div class="">Vision and Mission</div>
        <div class="">Why Us?</div>
        <div class="">Our Facilities</div>
      </nav>';
    }
  }

?>
