# calculator-app
 Calculator app challenge from Frontend Mentor

In this challenge I created a functional calculator using HTML, Sass, and JavaScript. The calculator has three different colors schemes that a user can toggle between. Creating this toggle functionality was challenging but I was able to overcome the challenge by changing the `:root` color styles with JavaScript. Sass also made this challenge easier, as it usually does. This is the first time I use the new `@use` instead of `@import` to import my variables across my different partial files.

This calculator has simple functionality that was created with JavaScript. Although not every "edge" case was accounted for, there are several "edge" cases that I was able to provide functionality for. 

With my calculator a user can:
 1. perform basic calculations (ex: 1 + 2 = 3)
 2. perform consecutive calculations (ex: 4 * 5 + 6 = 26) 
 3. perform correct calculation when equals key is hit consecutively (ex: 5 + 5 = 10 = 15 = 20)
 4. use decimals in calculations (ex: 100 * .5 = 50)
 5. reset current entry with CE key 
 6. reset entire calculator with Reset key
