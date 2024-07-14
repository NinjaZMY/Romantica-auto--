// we can do with : 
//convertToRoman=function(num) {if(num<=0) return ""; 
// the one above is the optimal solution 
//function convertToRoman(num) {if(num==0) return ""; 
// the one above does't ovveride the convertToRoman function 
// for better readability we can use the following design (however it's isn't optimal) :
// ↓ look the line below ↓
//convertToRoman=function convertToRoman(num) {"+c+"}
// something like that 
convertToRoman=function (num) {if(num==0) return ""; 
else if(  num >=1000  ) str="M"+convertToRoman(num-1000);
else if(  num >=900  ) str="CM"+convertToRoman(num-900);
else if(  num >=500  ) str="D"+convertToRoman(num-500);
else if(  num >=400  ) str="CD"+convertToRoman(num-400);
else if(  num >=100  ) str="C"+convertToRoman(num-100);
else if(  num >=90  ) str="XC"+convertToRoman(num-90);
else if(  num >=50  ) str="L"+convertToRoman(num-50);
else if(  num >=40  ) str="XL"+convertToRoman(num-40);
else if(  num >=10  ) str="X"+convertToRoman(num-10);
else if(  num >=9  ) str="IX"+convertToRoman(num-9);
else if(  num >=5  ) str="V"+convertToRoman(num-5);
else if(  num >=4  ) str="IV"+convertToRoman(num-4);
else if(  num >=1  ) str="I"+convertToRoman(num-1);
console.log(num+" gets transformed into "+str);
return str; }
let x=36; 
let str;
convertToRoman(x); //generated using author's main script >modtafrik@gmail.com<github:NinjaZMY
