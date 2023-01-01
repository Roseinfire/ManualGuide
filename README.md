## What is ManualGuide?
Was it ever boring write typical HTML pages? <br>
If you ever though about web presentations, you probably stopped due it's boring creation. <br>
Never stop. Just upgrade to new level. <br> 
ManualGuide is decoration language to deal with HTML easily. <br>
  
## In the begining..
When creating HTML document, connect ManualGuide script.
```HTML
<html><head><meta charset="utf-8">
<script src="https://Roseinfire.github.io/ManualGuide/ConnectManualGuide.js"></script>
</head></body></html>
```
This form probably all HTML you will ever write.
  
## Dealing with syntax..
### Outer parametres
ManualGuide automatically creates page, where load and resize events included. <br>
Outer parametrs defined via script attributes
* backgroundColor
* backgroundImage
* paperWidth
* paperColor (!)
#### As example: 
```HTML
<script backgroundColor="black" paperWidth="1100"></script>
```
### Inner parametres
### Should be writen just inside script. <br>
#### Creating style variable:
```javascript
&my-variable:(font-size:30px; text-align: center)  
```
* variable can take any name exclude '&' and ':'
* variable can take value exlude '(' and ')'
#### Creating an element:
```javascript
# my-text *type @my-variable
```
* my text is innerHTML and take any value exclude '#' and '*'
* type is standart element name
* my-variable is link to element style
Character '@' is also draw operator.<br>
Even if style not specified, '@' must be marked whith space after it.
```javascript
# No style *p @ 
```
#### Adding attributes:
```javascript
#*img @ { src="my-img.com" } 
```
* between symobls '{' and '}' mark standart attributes.
#### Relative sizes:
```javascript
#*img @ { src="my-img.com" } [10]
```
* between symbols '[' and ']' mark margin from border.
#### Child node:
To create child node, just begin new string with '!'
```javascript
# *div @my-variable
     ! # My first child element *p @
```
### Here we are. <br> For this moment it cannot replace HTML,
### Nevertheless, some things can became significantly easier.
P.S 
Features marked with (!) should be avaible in the future.
## About safety
Be careful with scripts connected from the internet. <br>
ManualGuide is like html wrapper. <br>
Your information never goes further your page. <br>
However, when you connect outer script, it usually has control over your page. <br>
Don't store confidicial information. Whenever posible check source code. <br>
That's why ManualGuide have open code. Join ManualGuide and Roseinfire. <br>
  
## About advertisment
Accourding to our rules, ManualGuide itself never uses advertisment. <br>
It does not mean nobody can't use ads on ManualGuide-based site. <br>

   
