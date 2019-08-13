var Letter = require("./letter");
//convert the word into an array
var wordArray = process.argv.slice(2);

//console.log (wordArray);
let guessWord= new Letter();
let wordToGuess=[];
let targetWordArray=[];

// create a function that converts target words into array
//replace the letters in the array with "-"
function Word(){
// eg strWord = World Trade Center
    this.strWordArray=function(){
        for(var i=0; i<wordArray.length; i++){
           
            this.dataArray =wordArray[i].split('') ;           
            console.log("Old array:" + this.dataArray);
            for(let j=0; j< this.dataArray.length; j++){
            //create an array containing letters to guess
            wordToGuess.push(this.dataArray[j]);
            //create an array with letters replaced with "-"
            targetWordArray.push('_');         


        }
           


        }
        
        console.log(targetWordArray);
        console.log(wordToGuess);
    };

}
let target_words= new Word();
target_words.strWordArray();
//console.log(guessWord);
