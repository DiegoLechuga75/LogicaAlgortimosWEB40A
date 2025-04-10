function binarySearch(array, target, low, high){
    if(low > high){
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if(array[mid] === target){
        return mid;
    } else if(array[mid] > target){
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

const array = [1,3,4,5,7,8,10,12,14,16,18,20,21];

console.log(binarySearch(array, 12, 0, array.length - 1));
