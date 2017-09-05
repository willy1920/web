function ajax(ajaxRequest){
  try {
    ajaxRequest = new XMLHttpRequest;
  }catch (e){
    alert(e);
  }
  return ajaxRequest;
}

function showAboutUs(){
  var ajaxRequest = ajax(ajaxRequest);
  ajaxRequest.onreadystatechange = function(){

  }
  ajaxRequest.open("GET", "", true);
  ajaxRequest.send(null);
}
