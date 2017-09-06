function ajax(ajaxRequest){
  try {
    ajaxRequest = new XMLHttpRequest;
  }catch (e){
    alert(e);
  }
  return ajaxRequest;
}

window.onload = function(){
  showLeftMenu();
  showHome();
}

var start;

function showLeftMenu(){
  var ajaxRequest = ajax(ajaxRequest);
  ajaxRequest.onreadystatechange = function(){
    if(ajaxRequest.readyState == 4 & ajaxRequest.status == 200){
      var respon = ajaxRequest.responseText;
      var display = document.getElementById('leftMenu');
      display.innerHTML = respon;
    }
  }
  ajaxRequest.open("GET", "config/showLeftMenu.php", true);
  ajaxRequest.send(null);
}

function showHome(){
  var ajaxRequest = ajax(ajaxRequest);
  ajaxRequest.onreadystatechange = function(){
    if(ajaxRequest.readyState == 4 & ajaxRequest.status == 200){
      var respon = ajaxRequest.responseText;
      var display = document.getElementById('respon');
      display.innerHTML = respon;
      showSlides();
      start = setInterval(showSlides, 5000);
    }
  }
  ajaxRequest.open("GET", "config/showHome.php", true);
  ajaxRequest.send(null);
}

function showAboutUs(){
  var ajaxRequest = ajax(ajaxRequest);
  ajaxRequest.onreadystatechange = function(){
    if (ajaxRequest.status == 200 && ajaxRequest.readyState == 4) {
      var respon = ajaxRequest.responseText;
      var display = document.getElementById('respon');
      display.innerHTML = respon;
      closeMenu();
      clearInterval(start);
    }
  }
  ajaxRequest.open("GET", "config/showAboutUs.php", true);
  ajaxRequest.send(null);
}
