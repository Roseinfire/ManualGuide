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
          this.recall = recall
          }
       }
         var keywords = []
         function pushkeyword(start_symbol, end_symbol, result) {
           keywords.push( new keyword(start_symbol, end_symbol, result) )
            }
         function read(data) {
           var iteration = null
           var res = ""
           var pos = -1; while(data[pos+1]) {
                 pos++; var change = null
                 for(var i = 0; i < keywords.length; i++) {
                   if(iteration && keywords[i] == iteration && keywords[i].end( data[pos] )) {
                      iteration.recall(res); res = ""; iteration = null;
                       }
                   if(!iteration && keywords[i].start( data[pos] )) { 
                     iteration = keywords[i]; change = true;
                       }
                     }
                  
                   if(iteration && !change) { res += data[pos] }
                   if(change) { change = null }
    
                   }; if(iteration) { iteration.recall(res) }
                } 
            var tempovar = null
            var tempotext = null
            var tempotype = null
            var tempowrite = null
            pushkeyword(["&"], [":"], function(res) { tempovar = res; })
            pushkeyword(["("], [")"], function(res) { 
                  try { 
                    eval("window." + tempovar + " = " + res);
                  } catch { 
                     console.error("Invalid variable: ", tempovar, "=", res)
                       }
                   tempovar = null
               }) 
            pushkeyword(["#"], ["*"], function(res) { tempotext = res;  tempowrite = null; })
            pushkeyword(["*"], [" ", `
`], function(res) { tempotype = res;  })
            pushkeyword(["@"], [" ", "{"], function(res) {
                try {
                  tempowrite = write(tempotext, tempotype, eval(res))
                  tempotext = null; tempotype = null;
                  } catch { console.error("Can't find link @" + res) }
               })
            pushkeyword("{", "}", function(res) { 
                 if(tempowrite) {
                  tempowrite.attribute(res)
                      }
               })
  
         function write(text, type, style) { 
          var element = (function () {
             try { 
                var res = document.createElement(type)
                if(text) { res.innerHTML = text }
                return res
                 } catch { 
                      console.warn("Element creation failed *" + type)
                      var err = document.createElement("p"); err.innerHTML = "creation error"
                      return err
                   }
               })()
              element.style = style
              truewrite(element)
              return element
          }
         HTMLElement.prototype.attribute = function(data) { 
              try {
                   eval("this." + data) 
                   searchspecs(this, data)
                 } catch { console.error("Can't declare attribute: ", data) }
          }
        function truewrite(e) { hand.append(e) }
        var specs = []
        function searchspecs(element, data) {
           for(var i = 0; i < specs.length; i++) {
                 if(specs[i].tag == element.tagName && specs[i].key == data) {
                   specs[i](element) 
                     }
                 }
           }
        specs.push({ tag: "IMG", key: "$", spec: function(e) {
           e.style.marginLeft="40px"
           e.onResize(function() {
                 e.width = hand.offsetWidth-80
                   })
            } })
   
    
    /*    
          read(`      &list: ( "text-align: center; font-size: 120%" )   
                      # example1 *p @list { href = "https://link-to.com" }
                      # example2 *p @list
                      # example3 *p @list
                      #*img { src="https://my-image.com" } {$}
               `)
    */