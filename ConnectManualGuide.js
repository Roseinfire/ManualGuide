
/*  USER SIDE */
  
window.addEventListener("load", function() {
fetch('https://roseinfire.github.io/ManualGuide/ManualGuide.json')
  .then(response => response.text())
  .then(text => establishManualGuide(text))
  
  function establishManualGuide(text) {
    window.content =  document.getElementById("content").innerHTML
    document.write(text)
    }
})
