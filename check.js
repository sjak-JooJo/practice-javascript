// function add(a, b){
//     return a+b;
// }
//  console.log(add("adam"+ "Eve"));

//  // triangle code 
//  function triAngle(side1,side2,side3){
//     var s = (side1 + side2 + side3) / 2;
//     var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
//     return area;
//  }

// console.log(triAngle(21,15,19));

// prime number check

function checkPrime(num){
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return "this is not a prime"; 
    return "this is a  prime number";
    
}

console.log(checkPrime(13));

