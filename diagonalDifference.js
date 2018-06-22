function diagonalDifference(arr){
    let arrLength = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    for(let i=0; i<arrLength; i++){
        diag1 += arr[i][i];
        diag2 += arr[i][arrLength - i - 1];
    }
    
    console.log(Math.abs(diag1 - diag2));
    return Math.abs(diag1 - diag2);
}

const sampleArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

diagonalDifference(sampleArray);

// 1 2 3
// 4 5 6
// 7 8 9