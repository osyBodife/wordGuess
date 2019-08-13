var inquirer = require('inquirer');

//convert the word into an array
var input = process.argv[2];
//create a test array
//let wordToGuess=["a", "b", "c"];
let wordToGuess=[];
let targetWordArray=[];

function Letter(){
    //if there is not entry, input=false;
    this.input=false;
    //create a function to check input 
    this.checkInput=function(){    
        if(input){
            //test code so far
            console.log(input);
            //call the checkLetter function
            this.checkLetter(input);

        }else{
            console.log("You have not entered any letter.");
        }
    }

    this.checkLetter=function(letter){ 
        this.letter=input; 
        //if input letter or guessed letter in the wordToGuess array
        //tell user , it is correct entry, and push to targetArray
        //otherwise wrong entry       
        if(wordToGuess.includes(this.letter)===true){
            console.log("Correct!!");
            //to add to it correct position the target arrary we need the index
            // in wordToGuess array
            var index = wordToGuess.indexOf(this.letter);
            targetWordArray.splice(index,0,this.letter);
            console.log(targetWordArray);
             console.log(index);

        }else{
            //when user guessed wrongly
            console.log("The letter is incorrect!!");
        }
        
        
       
    }


}




let guessWord= new Letter();
guessWord.checkInput();

module.exports = Letter;

















/*
console.log (wordArray);



let targetWordarray=[];
function Word(){

// eg strWord = World Trade Center
    this.strWordArray=function(){
        for(var i=0; i<wordArray.length; i++){
           
            this.wordToGuess =wordArray[i].split('') ;           
            //console.log(this.wordToGuess);
            for(let j=0; j< this.wordToGuess.length; j++){
            targetWordarray.push('_');         


        }
           


        }
        
        console.log(targetWordarray);
    };

}
let guessWord= new Word();
guessWord.strWordArray();
//console.log(guessWord);

var str = 'abcdefg';
var ar = str.split(''); // empty string separator
//console.log( ar ); // [ "a", "b", "c", "d", "e", "f", "g" ]

*/