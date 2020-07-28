
//Developed by MD NAYEEM HOSSAIN.

//find anagrams
function anagram(value1, value2){

//declaring arrays to store values
var store1 = [];
var store2 = [];
var store3 = [];


//splitting the values to single caracter's to store in array.
var input1 = value1;
var splitIn1 = input1.split("");
var input2 = value2;


//splitting the values to single caracter's to store in array.
var splitIn2 = input2.split("");
store1 = splitIn1;
store2 = splitIn2;

//concat both values in one array.
store3 = store1.concat(store2);

//declaring new array to store common values
var store5 = [];

//storing common values
for( var i = 0; i < store3.length; i++){
    var element = store3[i];
    var index = store5.indexOf(element);
    if( index == -1){
        store5.push(element);
    }   
}


/*console.log(store5) to check whether strong common values or not?*/

//assimilating length of common value array and declared values array.
if(store5.length == store1.length && store5.length == store2.length){
    return "Both Strings are Anagram";
}
else{
    return "Both Strings are not Anagram";
}

}

module.exports = anagram
