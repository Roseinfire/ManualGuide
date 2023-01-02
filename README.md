## What is ManualGuide?
Was it ever boring write typical HTML pages? <br>
If you ever though about web presentations, you probably stopped due it's boring creation. <br>
Never stop. Just upgrade to new level. <br> 
ManualGuide is decoration language to work with HTML easily. <br>
  
## In the begining..
When creating HTML document, connect ManualGuide script.
```HTML
<html>
      <head>
          <meta charset="utf-8">
             <script src="https://Roseinfire.github.io/ManualGuide/ConnectManualGuide.js">
             </script>
        </head>
     </body>
</html>
```
This form probably all HTML you will ever write.
  
## Dealing with syntax..
### Outer parametres
ManualGuide automatically creates page, where load and resize events included. <br>
Outer parametrs defined via script attributes
* theme
* background
* screen
* style
* fetch
#### As example:
```HTML
<script screen="2200" theme="pink" style="border: 0"></script>
```
### Inner parametres
### Should be writen just inside script. <br>
#### Creating style:
```javascript
&my-style:( font-size:30px; text-align: center )  
```
* variable can take any name exclude '&' and ':'
* value can take value exlude '(' and ')'
#### Creating an element:
```javascript
# My text *type @style
```
* my text is innerHTML and take any value exclude '#' and '*'
* type is standart element name
* style is link like &style:()
Character '@' is also draw operator.<br>
Even if style not specified, '@' must be marked with space after it.
```javascript
  # With no style *p @ 
```
#### Adding attributes:
```javascript
 #*img @ { src="https://my-image.com/img.png" } 
```
* between symobls '{' and '}' mark standart attributes.
#### Relative sizes:
```javascript
#*img @ { src="https://my-image.com/img.png" } [20]
```
* between symbols '[' and ']' mark margin from border.
#### Child node:
To specify child node, just begin command from "-"
```javascript
# *div @my-style
     - # *div @
     -- # Hello child nods! *div @ 
```
### Here we are. 
### For this moment it cannot replace HTML.
### Nevertheless some things can became significanty easier.
## About safety
Be careful with scripts connected from the internet. <br>
ManualGuide is like html wrapper. <br>
Your information never goes further your device. <br>
However, when you connect outer script, it usually has control over your page. <br>
Don't store confidicial information. Whenever posible check source code. <br>
That's why ManualGuide have open code. <br>
  
## About advertisment
Accourding to our rules, ManualGuide itself never uses advertisment. <br>
It does not mean nobody can't use ads on ManualGuide-based site. <br>

   
