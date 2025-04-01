function TwoSum(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [arr[left], arr[right]];
        } else if(sum < target){
            left++;
        } else {
            right--;
        }
    }
    return null;
}

let array = [11,15,2,7];
let target = 9;
let result = TwoSum(array, target);
console.log(result);

function improvedTwoSum(arr, target){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

let improvedResult = improvedTwoSum(array, target);
console.log(improvedResult);


let palabra = "Amo la pacifica paloma";

function checkPalindrome(string){
    string = string.toLowerCase();
    let stringWithoutSpaces = string.split(" ").join("");
    let left = 0;
    let right = stringWithoutSpaces.length - 1;
    while(left !== right){
        if(stringWithoutSpaces[left] !== stringWithoutSpaces[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(checkPalindrome(palabra));
