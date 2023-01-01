## What is ManualGuide?
  Was it ever boring write typical HTML pages?
  If you ever though about web presentations, you probably stopped due it's boring creation.
  Never stop. Just upgrade to new level.
  ManualGuide is decoration language to deal with HTML easily.
  
## In the begining..
  When creating HTML document, connect ManualGuide script.
  '''
  <html><head><meta charset="utf-8">
  <script src="https://Roseinfire.github.io/ManualGuide/ConnectManualGuide.js"></script>
  </head></body></html>
  '''
  This form almost all HTML you will ever write.
  
## Dealing with syntax..
  Outer parametres
     ManualGuide automaticly creates page, where load and resize events included.
     Outer parametrs defined via script attributes:
     * backgroundColor
     * backgroundImage
     * paperWidth
     * paperColor (!)
 Inner parametres
     Should be writen just inside script.
     Creating style variable:
          ''' &my-variable:(font-size:30px; text-align: center)  '''
          * variable can take any name exclude '&' and ':'
          * value can take value exlude '(' and ')'
     Creating element:
          ''' # my-text *type @my-variable '''
          * my text is innerHTML and take any value exclude '#' and '*'
          * type is standart element name
          * my-variable is link to element style
    Adding attributes:
          ''' #*img { src="my-img.com" } '''
         * between symobls '{' and '}' mark standart attributes.
    Relative sizes:
       ''' #*img @ { src="my-img.com" } [10]'''
          * between symbols '[' and ']' mark margin from border.
  Child node (!):
        To create child node begin new string and write four spaces from parent node string.
         ''' # My first child element! *div @my-variable [10]
                  #*img @ { src="my-img.com" } [10]
         '''
   Here we are. For this moment it cannot replace HTML, but some things can became significanty easier.
## About safety
  Be careful with scripts connected from the internet. ManualGuide is like wrapper. 
  Your information never goes further your page. However, when you connect outer script, it usually has 
  control over your page. Don't store confidicial information. Whenever posible check source code.
  That's why ManualGuide have open code. Join ManualGuide and Roseinfire.
  
## About advertisment
   Accourding to our rules, ManualGuide itself never uses advertisment.
   It does not mean nobody can't use ads on ManualGuide-based site.
  
## Related:
  *
  *
   
