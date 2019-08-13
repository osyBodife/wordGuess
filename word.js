
//convert the word into an array
var wordArray = process.argv.slice(2);

console.log (wordArray);



let targetWordarray=[];
let wordToGuess=[];
function Word(){

// eg strWord = World Trade Center
    this.strWordArray=function(){
        for(var i=0; i<wordArray.length; i++){
           
            this.dataArray =wordArray[i].split('') ;           
            console.log("Old array:" + this.dataArray);
            for(let j=0; j< this.dataArray.length; j++){
            wordToGuess.push(this.dataArray[j]);
            targetWordarray.push('_');         


        }
           


        }
        
        console.log(targetWordarray);
        console.log(wordToGuess);
    };

}
let guessWord= new Word();
guessWord.strWordArray();
//console.log(guessWord);
