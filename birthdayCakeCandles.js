function birthdayCakeCandles(arr) {
    //determine the highest value
    let totalHighValue = 0;
    let maxValue = arr.reduce((a, b) => {
        return Math.max(a, b);
    })

    //check how many times highest digit appeared in the array

    for (let i = 0; i < arr.length; i++){
         if (arr[i] == maxValue){
            totalHighValue++;
         }
    }
    console.log(totalHighValue);
    return totalHighValue;
}

birthdayCakeCandles([3, 2, 1, 3]);