function showVision(){
  document.getElementById('vision').style.display = 'block';
  document.getElementById('vision').className = "contentComingIn";
  document.getElementById('why').className = 'contentComingOut';
  document.getElementById('facilities').className = 'contentComingOut';
  moveFigure(0, 4);
  moveLogo();
  setTimeout(hideTextVision, 900);
}

function showWhy(){
  document.getElementById('why').style.display = 'block';
  document.getElementById('vision').className = "contentComingOut";
  document.getElementById('why').className = 'contentComingIn';
  document.getElementById('facilities').className = 'contentComingOut';
  moveFigure(0, 4);
  moveLogo();
  setTimeout(hideTextWhy, 900);
}

function hideTextVision(){
  document.getElementById('why').style.display = 'none';
  document.getElementById('facilities').style.display = 'none';
}

function hideTextWhy(){
  document.getElementById('vision').style.display = 'none';
  document.getElementById('facilities').style.display = 'none';
}

function showFacilities(){
  document.getElementById('facilities').style.display = 'block';
  document.getElementById('vision').className = "contentComingOut";
  document.getElementById('why').className = 'contentComingOut';
  document.getElementById('facilities').className = 'contentComingIn';
  moveFigure(0, 4);
  moveLogo();
  setTimeout(hideTextFacilities, 900);
}

function hideTextFacilities(){
  document.getElementById('vision').style.display = 'none';
  document.getElementById('why').style.display = 'none';
}

function moveFigure(x, limit){
  for (var i = 1; i <= 4; i++) {
    if(i != x){
      document.getElementById('figure'+i).className = 'moveLeft' + i;
    }
  }
  setTimeout(function(){stopMove(x, limit)}, 900);
}

function stopMove(x, limit){
  var width = document.getElementById('wrapFigure').offsetWidth;

  var height = document.getElementById('figure1').offsetHeight;

  for (var i = 1; i <= limit; i++) {
    if(i != x){
      document.getElementById('figure' + i).style.marginLeft = width - 200 + 'px';
      document.getElementById('figure' + i).style.marginTop = 150 * (i - 1) +'px';
    }
  }
}

function moveLogo(){
  document.getElementById('logo').className = "logoMoveLeft";
  setTimeout(moveLogoDone, 900);
}

function moveLogoDone(){
  document.getElementById('logo').style.transform = "scale(0.8)";
  document.getElementById('logo').style.marginRight = "10%";
}

function figure1(){
  document.getElementById('figure1').className = 'figure1MoveLeft';
  moveFigure(1, 4);
  setTimeout(figure1Stop, 900);
}

function figure1Stop(){
  document.getElementById('figure1').style.marginLeft = '2%';
  document.getElementById('figure1').style.marginTop = '2%';
}

function figure2(){
  document.getElementById('figure2').className = 'figure1MoveLeft';
  moveFigure(2, 4);
  setTimeout(figure2Stop, 900);
}
function figure2Stop(){
  document.getElementById('figure2').style.marginLeft = '2%';
  document.getElementById('figure2').style.marginTop = '2%';
}

function figure3(){
  document.getElementById('figure3').className = 'figure1MoveLeft';
  moveFigure(3, 4);
  setTimeout(figure3Stop, 900);
}
function figure3Stop(){
  document.getElementById('figure3').style.marginLeft = '2%';
  document.getElementById('figure3').style.marginTop = '2%';
}

function figure4(){
  document.getElementById('figure4').className = 'figure1MoveLeft';
  moveFigure(4, 4);
  setTimeout(figure4Stop, 900);
}
function figure4Stop(){
  document.getElementById('figure4').style.marginLeft = '2%';
  document.getElementById('figure4').style.marginTop = '2%';
}
