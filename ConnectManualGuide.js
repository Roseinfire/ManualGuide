
/*  USER SIDE */
  
fetch('https://roseinfire.github.io/ManualGuide/ManualGuide.json')
  .then(response => response.text())
  .then(text => establishManualGuide(text))
 
  function establishManualGuide(text) {
    localStorage.setItem("ManualGuide/", document.getElementById("content"))
    document.write(text)
    }
