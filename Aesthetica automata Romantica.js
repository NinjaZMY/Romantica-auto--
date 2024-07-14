//function convertToRoman(num) {

  "Intital function here fuckers"; 
  /* eval(c); // apparently it won't function here 
   apparently eval injection can happen
   for a full function 
   I shall demonstrate it later on $$$
   blab lbaal blab labla bla 
   bla lba bla bla bla gla /fsfsfs 
  dsdsdsdsdsd sdsdsd blabla blasdsdsdsd 
  dsdsdsds sdsdsdsdsdsdsdsdsdsdsdsdsddsdsd */ 

  //}//endof romanConvert fn

let str=""; 
let c=`if(num==0) return ""; `
let x=36
Aesthetically_Pleasing_Design_Of_Imperfect_Perfection()
//convertToRoman(x);//test initial fn
console.clear()//for better debug
console.log(c)//testing my function code
eval(c)
console.warn(convertToRoman)
convertToRoman(x)
console.log("Finally after Roman Conversion "+x+" is transformed into: "+str)
/* I will try to implement a quite fascinating design 
spacio-temporel optimization 
this is might not be the most perfect optimization 
but let's give it a try */ 

function Aesthetically_Pleasing_Design_Of_Imperfect_Perfection()
{
let ks=[1,4,5,9,10,40,50,90,100,400,500,900,1000]
let R=["I","IV","V","IX","X", "XL","L","XC","C","CD","D","CM","M" ]
let n=ks.length
//console.log("\n Awesome fn here :"+(n==R.length))
for(let i=n-1;i>-1;i--)
{
let k=ks[i]
let s=R[i] 
/* console.log( s+ " = "+k);
test of values correspondance 
my fn is based on this principle 
 in order to write code that must not be repeated 
 how can I write it I wonder */

c+=`\nelse if(  num >=`+k+`  ) str="`+s+`"+convertToRoman(num-`+k+`)`
//correct variable usage

}//end of for loop
//  console.log(c);// correct script for now
// here we can inject the rest of the fn 
c+=`\nconsole.log(num+" gets transformed into "+str);
return str; `
c="convertToRoman=function(num) {"+c+"}"
/* 
convertToRoman=function(num) is able to override the previous function if the previous function exists, seems to be the optimal choice 
c="convertToRoman=function convertToRoman(num) {
 the notation above does overrride but isn't optimal for spacio-optimizations, the chosen solution is shorter
c="function convertToRoman(num) {
this is my favorite design especially when it's able to override
  this design is able to override in somecases, 
 but there were once case where this design above couldn't override 
 if this design is unable to override we shall pick another design that works 
 the previous convertRoman fn, so the other above notation shall be applied */
}//end of cool fn 

/* 
using recursive functioning (fn) what happens is called:
RangeError: Maximum call stack size exceeded 
 that was because my non base conditons 
 were written in inverted manner 
 causing a sort of confusion at first 
 but I did try and I did make my own proof of concept 
 comparing the stack function with the intial fn 
 which made me discover what was causing the issue
 it was a  ( x operator y ) type of mistake
 I wrote my code as ( y operator x ) 
 as the solution was about  x<o>y not y<o>x 
 clearly the inversion caused my fn to loop forever
 that's why it was expected for me to exceed said callstack x stack erro1r
 luckily now everything is fine 
 this was like coding two problems
 i was interested in coding an non redudant code 
 coding a dynamic solution, dynamic code 
 0 redudancy, would disagree with comments though
without them comments and without debugging code
this would be quite a msyterious code 
*/

/* 
  if there are any problems with my code or any way
  to write it with better optimizations, 
  please reach out to me: modtafrik@gmail.com 
  github: NinjaZMY ; pseudo: NinjaZMY 
*/