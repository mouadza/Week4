function upDate(previewPic) {
    var preview = document.getElementById("image");
    preview.style.backgroundImage = "url(" + previewPic.src + ")";
    preview.innerHTML = previewPic.alt;
  }
  function unDo() {
    var preview = document.getElementById("image");
    preview.style.backgroundImage = "url('')";
    preview.innerHTML = "Hover over an image below to display here.";
  }
function load() {
    console.log('Page is fully loaded');
}
var images = document.querySelectorAll('.preview');
function Focus(x){
    for (var i = 0; i < images.length; i++) {
    console.log('Focus event triggered');
    x.style.border = '2px solid red';
  }
}
function Blur(){
  for (var i = 0; i < images.length; i++) {
    console.log('Blur event triggered');
    x.style.border = 'none';
  }
}
