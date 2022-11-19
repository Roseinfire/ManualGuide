# About ManualGuide
It's like presentation language based on html.
There are only three main functions:
* write
* image
* background
Which allows you almost no need to write HTML.
All styles will be created automatically.

# Creating new document
via form below:
```html
<html><head>
   <meta charset="UTF-8">
      <script src="https://roseinfire.github.io/ManualGuide/ConnectManualGuide.js"></script>
      </head>
            <p id="content" style="display: none">
                
            </p>
          <p style="text-align: center; font-size: 110%">Probably no Internet</p>
    </html>
```
"content" tag must includes ManualCode, which described below:
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
```
```
# Explanation

# Trouble Shooting
