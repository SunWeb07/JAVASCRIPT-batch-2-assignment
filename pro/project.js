//  Name : Mawani Sunny 

//                      JAVASCRIPT ESSENTIALS                  BATCH-2                         ASSIGNMENT DAY-2





//ques 1:Program to search for a particular character in a string--
/* ans we can use search or other indexes ()indexOF,lastIndex)
string method also to search for particular character in a string*/


let name = "stringalpha";
console.log(name.search('a'))
console.log(name.indexOf('a'))
console.log(name.lastIndexOf('a'))
//these three can used to search for character in a string




//ques 2:Program to convert minutes to seconds
/* ans here we take minutes as input from user and 
it will be converted to seconds and display it in console*/
let min = prompt("enter minutes")
    let sec = min * 60
    console.log("the second are " + sec)


//ques 3:Program to search for a element in a array of strings
/**
 * ans here we initialise  a string array with particular value
 * search for a particular element if it exist it gives the position index of the first letter 
 * else will give ans in negative 
 */

let strArray = [ 'alpha' , 'bark' , 'kolt' ,'bolt' ,'dase'];//creating an array of string

console.log(strArray.toString())//to print in the form of string

console.log(strArray.indexOf('alpha'))

console.log(strArray.indexOf('Good'))




// ques 4:Program to display only elements containing 'a' in them from a array
/**
 * ans we are using for  , in which we are chceking the condition
 * that if 'a' is there as character for an element
 * it will assign  that element to newStr array 
 * hence we can a new array which consist of element 
 * which have 'a' as a character in individuals element  
 */

let newStr=[]//new empty array is declared

for (let i =0 ; i<strArray.length;i++){
   if(   strArray[i].search('a') >=0)
   newStr[i]=strArray[i]     //store the the element to the array which contains 'a'  
}
console.log(newStr.toString())

//ques 5:Print an array in reverse order
/**
 * ans we can use for loop or direct array method , which will reverse a particular array 
 *///reverse via for loop
for(let i=strArray.length -1 ;i>=0;i--){
    console.log(strArray[i])
}
//reverse via methods
 strArray.reverse();

console.log(strArray.toString())//prints array in the form of string



    

    



