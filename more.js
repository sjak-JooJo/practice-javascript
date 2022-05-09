function largestElement(number){
    let max = number[0];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}



function smallestElement(number){
    let min = number[0];
    for(let i = 0; i < number.length; i++){
        let element = number[i];
        if(element < max){
            min = element;
        }
    }
    return max;
}

let maxValue = largestElement(22,22,12);
console.log(maxValue);
