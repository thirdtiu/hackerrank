function sum (x, y) {
    return Number(x) + Number(y);
}
function miniMaxSum(arr) {
    const sortedArray = arr.sort();
    const min = sortedArray.slice(0, arr.length - 1).reduce(sum, 0);
    const max = sortedArray.slice(1, arr.length).reduce(sum, 0);
    console.log(min, max);

    return(min + ' ' + max);
}


miniMaxSum([1, 2, 3, 4, 5]);