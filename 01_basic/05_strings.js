const Name = "Manjay"

const repoCount = 50

//console.log(Name + repoCount + " values");

console.log(`Hello my name is : ${Name} and my repo count is ${repoCount}`);

 const gameName = new String("Manjay-kumar-prajapati")

 console.log(gameName[0]);
 console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,6)
console.log(anotherString);

const newStringOne = "    Manjay    "
console.log(newStringOne);
console.log(newStringOne.trim());


 const url = "https://manjay.com/manjay%20prajapati"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('manjay'));
 
 console.log(gameName.split('-'));
 