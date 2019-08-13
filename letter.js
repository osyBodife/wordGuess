var inquirer = require('inquirer');

//convert the word into an array
var input = process.argv[2];

function Letter(input){
    //if there is not entry, input=false;
    this.input=false;
    //create a function to check input
    function checkInput(){
        if(input){
            console.log("You have not entered any letter.")
        }else{


        }
    }


}
























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