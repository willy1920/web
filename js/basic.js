/*document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('loader').style.display = 'none';
  showLeftMenu();
  showAboutUs();
});*/
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    startContent();
    // document ready
  }
}, 100);

function startContent(){
  document.getElementById('respon').style.display = 'block';
  document.getElementById('logo').style.display = 'block';
  document.getElementById('loader').style.display = 'none';
  showLeftMenu();
  showAboutUs();
}
