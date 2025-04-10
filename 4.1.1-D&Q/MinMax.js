function MinMax(array, startIndex, lastIndex){
    if(startIndex === lastIndex){
        return [array[startIndex], array[startIndex]];
    }

    if((lastIndex - startIndex) === 1){
        if(array[startIndex] > array[lastIndex]){
            return [array[lastIndex], array[startIndex]];
        } else {
            return [array[startIndex], array[lastIndex]];
        }
    } else {
        let mid = Math.floor((startIndex + lastIndex) / 2);
        let [leftMin, leftMax] = MinMax(array, startIndex, mid);
        let [rightMin, rightMax] = MinMax(array, mid + 1, lastIndex);

        return [Math.min(leftMin, rightMin), Math.max(leftMax, rightMax)];
    }
}

const array = [3,4,5,7,8,10,71,12,14,16,1,18,20,21];

console.log(MinMax(array, 0, array.length - 1));
