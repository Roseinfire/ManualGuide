# About ManualGuide
It's like presentation language based on html.
There are only three main functions:
* write
* image
* background

 Allows you almost no need to write HTML.

# Creating new document
create html document via form below:
```html
<html><head>
   <meta charset="UTF-8">
      <script src="https://roseinfire.github.io/ManualGuide/ConnectManualGuide.js"></script>
      </head>
            <p id="content" style="display: none">
                /* "content" tag must includes syntaxis, which described below. */
            </p>
          <p style="text-align: center; font-size: 110%">Probably no Internet</p>
    </html>
```
Run in browser. Ready!
# Syntaxis
The "write" function: 
```JavaScript
write("Example", "p", ["color: brown; font-size: 120%"])
```
where:
* first argument is text inside html element
* second argument is HTML tag
* third argument is array of CSS commands

The "background" function:
```JavaScript
background("yellow", "https://Example-Background.png", 2100)
```
where:
* first argument is background color
* second argument is background-image source
* third argument is expected screen width

The "image" function:
```JavaScript
image("https://Expample-Image.jpg", 40, ["border: 1px solid"])
```
where:
* first argument is image source
* second argument is relative margin
* third argument is array CSS commands

# Examples
```html
<html><head>
      <script src="https://roseinfire.github.io/ManualGuide/ConnectManualGuide.js"></script>
      </head>
            <p id="content" style="display: none">
                var style = ["font-size: 135%;", "color: brown;", "text-align: center;"]
                write("As example let's draw a rose:", "p", style)
                image("https://roseinfire.github.io/ManualGuide/RoseLogo.png", 40)
            </p>
          <p style="text-align: center; font-size: 110%">Probably no Internet</p>
    </html>
```
Same example as page [Example.html](https://roseinfire.github.io/ManualGuide/Example.html)
# Explanation
When your html file loaded, script which you connected begin his work.
"content" saved to localStorage while document rewriting according to ManualGuide.json,
which can read "content" as simple JavaScript. So, content cannot be stolen by third persons, because
all the time stored on device. 
:rotating_light: Nevertheless, connecting scripts like this doesn't garant security, cause
script potentially has full control over the page. You can inspect our useside [here.](https://github.com/Roseinfire/ManualGuide/blob/main/ConnectManualGuide.js)
