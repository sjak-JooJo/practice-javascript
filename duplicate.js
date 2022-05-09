const name = ['abul', 'babul', 'babul', 'dabul', 'ebul', 'babul', 'gabul', 'abul'];

function removeDupliate(names){
    const unique = [];
    // for(let i = 0; i < names.length; i++){
    //     const element = names[i];
    //     //console.log(element);
    // }
    for (const element of names){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueName = removeDupliate(name);
console.log(uniqueName);

// number remove
 const n = [12,12,1,2,323,23,23,23,43,34,43];
function removeNumber(num){
    const uni = [];
    for(const onceNum of num){
        if(uni.indexOf(onceNum) == -1){
            uni.push(onceNum);
        }
    }
    return uni;
}

const checkNum = removeNumber(n);
console.log(checkNum);