var chance = require('chance');

var chance = new chance();


//generates a single character from the alphabet pool {A-Z,a-z},{0-9},{!@#$%^&*()}
var chance_random_char = chance.character();
console.log("Random character generated is ======> "+"\n"+chance_random_char);

//generates a character from a specific pool {a-h}

var chance_random__pool = chance.character({pool:'abcdegh'});
console.log("Random character from specific pool =======> "+"\n"+chance_random__pool);

//generates an random integer
var random_integer = chance.integer();
console.log("Generated a random integer =======> "+"\n"+random_integer);

//generate a random integer between 0 and 100
var random_int_range = chance.integer({min:0,max:100});
console.log("Generated a random integer between 0 and 100 =======> "+"\n"+random_int_range);

//generates a random string
var my_random_String = chance.string();
console.log("Generated a random string ======> "+"\n"+my_random_String);

//generates a random string of length 10
var random_string_length = chance.string({length:5});
console.log("Generated a random string of length 5 ======> "+"\n"+random_string_length);

//generate a string from specified characters
var string_defined = chance.string({pool: 'abcde'});
console.log("Generated a string from pool ========> "+"\n"+string_defined);

//generate a string of length 5 and from specified characters
var random_length_defined = chance.string({length: 5, pool: 'abcde'});
console.log("Generated a string of length 5 and from a specific pool =========> "+"\n"+random_length_defined);

//generate a random paragraph
var random_para = chance.paragraph();
console.log("Generated a random paragrapgh ========> "+"\n"+random_para);

//generate a random person age
console.log("Random age generated =======> "+"\n"+chance.age());

//generate a random date of birth in string in DD/MM/YYYY format
console.log("Random DOB generated ==========> "+"\n"+chance.birthday({string: true, american: false}));

//generate a random name
console.log('Random name generated is ========> '+"\n"+chance.name());

//generate a random  gmail email id
console.log('Random email generated =========> '+"\n"+chance.email({domain: 'gmail.com'}));

//generate a random address, with a city, and a country
console.log("Random address generated is ======>"+"\n"+chance.address()+","+chance.street()+","+chance.city()+","+chance.state({full:true})+","+chance.country());

//generate a random phone number
console.log("Random phone number ========> "+"\n"+chance.phone({formatted:false,country: 'uk', mobile: true}));









