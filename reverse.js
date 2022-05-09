const greetings = 'hello. how are you?';

function reverseString(text){
    let reverse = "";
    for(const letter of text){
        //console.log(letter);
        reverse = letter + reverse;
       
    }
    // console.log(reverse);
    return reverse;
}

// const reversed = reverseString(greetings);
// console.log(reversed);
const rev = reverseString(greetings);
console.log(rev);