       var loads = 0
        function awaitload(endkey) {
          if( window.onresize) { window.onresize() }
          var papers = document.getElementsByClassName("paper")
          if(!loads && papers.length) { papers[0].innerHTML = "" }
          if(!endkey) { loads++ }
          else { loads-- }
          if(!loads) {
                  function get(name) { 
                      var list = __manual__.attributes
                      for(var i = 0; i < list.length; i++) { if(list[i].name == name) { return list[i].value } } 
                      return undefined
                  }
                     try {
                              for(var i = 0; i < nods.length; i++) {
                                   if(nods[i].childhood) { 
                                      try { nods[i-1].append(nods[i].node) }
                                      catch { console.error("this node can't be a child > ", i) }
                                           } else { hand.append(nods[i].node) }
                                      }
                                var color = get("color")
                                var image = get("image")
                                background(color,  image, __manual__.width)
                                document.getElementById("content").style.display = "block";
                                document.getElementById("load").style.display = "none";
                                if( window.onresize) { window.onresize() }  
                       } catch { console.warn("iterations run was not standart") }
                   }
             }
     class keyword {
       constructor(start=[], end=[], recall=function() {}) {
          this.start = function(compl) {
              for(var i = 0; i < start.length; i++) { if(start[i]==compl) { return true } }
              return false
                  }
          this.end = function(compl) {
              for(var i = 0; i < end.length; i++) { if(end[i]==compl) { return true } }
              return false
              }
          this.recall = function(event, response) { 
              if(response) { console.log(event) }   
              recall(event)
                   }
             }
       }
         var keywords = []
         function pushkeyword(start_symbol, end_symbol, result) {
           keywords.push( new keyword(start_symbol, end_symbol, result) )
            }
         function read(data, response) {
           awaitload()
           var iteration = null
           var res = ""
           var pos = -1; while(data[pos+1]) {
                 pos++; var change = null
                 for(var i = 0; i < keywords.length; i++) {
                   if(iteration && keywords[i] == iteration && keywords[i].end( data[pos] )) {
                      iteration.recall(res, response); res = ""; iteration = null;
                       }
                   if(!iteration && keywords[i].start( data[pos] )) { 
                     iteration = keywords[i]; change = true;
                       }
                     }
         
                   if(iteration && !change) { res += data[pos] }
                   if(change) { change = null }
    
                   }; if(iteration) { iteration.recall(res, response) }
                    awaitload(true)
                } 
            var tempovar = null
            var tempotext = null
            var tempotype = null
            var tempowrite = null
            var childhood = null
            var nods = new Array()
            pushkeyword(["&"], [":"], function(res) { tempovar = res; })
            pushkeyword(["("], [")"], function(res) { 
                  try { 
                    eval("window." + tempovar + " = '" + res + "'");
                  } catch { 
                     console.error("Invalid variable: ", tempovar, "=", res)
                       }
                   tempovar = null
               }) 
            pushkeyword(["!"], ["#"], function(res) { childhood = true; })
            pushkeyword(["#"], ["*"], function(res) { tempotext = res; })
            pushkeyword(["*"], [" ", `
`], function(res) { tempotype = res;  })
            pushkeyword(["@"], [" ", "{"], function(res) {
                try {
                  tempowrite = write(tempotext, tempotype, eval(res))
                  nods.push({ node: tempowrite, childhood: childhood })
                  tempotext = null; tempotype = null; childhood = null
                  } catch { console.error("Can't find link @" + res) }
               })
            pushkeyword(["{"], ["}"], function(res) {
                 if(tempowrite) {
                  tempowrite.attribute(res)
                      }
               })
            pushkeyword(["["], ["]"], function(res) {
             if(tempowrite) { onResize(tempowrite, function(e) {
                try {
                    var padding = eval(res)
                    e.style.marginLeft = 2*padding
                    e.style.width = (hand.offsetWidth-padding) + "px"
                      } catch { console.error("Invalid spec: ", res) }
                           }); 
                       }
               })
  
         function write(text, type, style) { 
          var element = (function () {
             try { 
                var res = document.createElement(type)
                if(res.tagName == "IMG" || res.tagName == "frame" || res.tagName == "irame") {
                    awaitload()
                    res.onload = function() { awaitload(true) }
                  }
                if(text) { res.innerHTML = text }
                return res
                 } catch { 
                      console.warn("Element creation failed *" + type)
                      var err = document.createElement("p"); err.innerHTML = "creation error"
                      return err
                   }
               })()
              element.style = style
              return element
          }
         HTMLElement.prototype.attribute = function(data) {
              try {
                   eval("this." + data)
                 } catch { console.error("Can't declare attribute: ", data) }
          }
  