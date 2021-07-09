# calculator-app
 Calculator app challenge from Frontend Mentor

In this challenge I created a functional calculator using HTML, Sass, and JavaScript. The calculator has three different colors schemes that a user can toggle between. Creating this toggle functionality was challenging but I was able to overcome the challenge by changing the `:root` color styles with JavaScript. Sass also made this challenge easier, as it usually does, and I made frequent use of mixins and variables. This is the first time I used the new Sass `@use` instead of `@import` to import my variables across my different partial files.

I used JavaScript to create simple calculator functionality in this project. With my calculator a user can:

 1. perform basic calculations (ex: 1 + 2 = 3)
 2. perform consecutive calculations (ex: 4 * 5 + 6 = 26) 
 3. perform correct calculation when equals key is hit consecutively (ex: 5 + 5 = 10 = 15 = 20)
 4. use decimals in calculations (ex: 100 * .5 = 50)
 5. delete a number off of the current entry with the DEL key, or if the number length is 1, the current entry will reset to 0. Also, if DEL is pressed after a calculation, the current entry will reset to 0.
 6. reset entire calculator with Reset key

My calculator also has similar functionality to the Google and Apple calculator in that when a calculation is done, if a number is then pressed immediately after the calculation, the calculator will reset and start over from that point on. For example: 5 * 5 = 25 5 + 2 = 7 50 / 2 = 25.



