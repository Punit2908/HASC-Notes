//strings

let str1 = "    Kanwarpal"
let str2 = "Singh    Singh"
let str3 = str1+" "+str2

console.log(str3.length);
console.log(str3[15]);

//string methods

console.log(str3.toUpperCase(),str3);
console.log(str3.toLowerCase());

console.log(str3.trim());

let str4 = str3.toUpperCase().trim()
console.log(str4);

console.log(str3.includes("N")); //boolean
console.log(str3.indexOf("n"));  //number  //first occurrence of letter
console.log(str3.lastIndexOf("n"));


console.log(str3.replace("Singh","Paaji")) //first occurrence ko change krta hai
console.log(str3.replaceAll("n","a"));  //change every occurrence of given string

console.log(str3.concat(" How are you?"))

//hello my name is Jiya?
//split("")
console.log(str3.split("Kanwar"));


//naming convention
//snake_naming  kanwarpal_singh_paaji
//chain-naming kanwarpal-singh-paaji
//camelCasing  kanwarpalSinghPaaji