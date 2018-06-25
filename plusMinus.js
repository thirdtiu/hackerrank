function evaluate(x){
    return Number.parseFloat(x).toFixed(6);
}
function plusMinus(arr) {
    let arrLength = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let results = [];
    arr.forEach((element, i) => {
        // console.log(element); 
        if (element > 0){
            positiveCount++;
        }
        if(element === 0){
            zeroCount++;
        }
        if(element < 0 ){
            negativeCount++;
        }
    });
    let positiveDecimal = evaluate(positiveCount/arrLength);
    let negativeDecimal = evaluate(negativeCount/arrLength);
    let zeroDecimal = evaluate(zeroCount/arrLength);
    results.push(positiveDecimal, negativeDecimal, zeroDecimal);

    results.forEach(element => {
        console.log(element);
        return element;
    })
    // console.log(results);
    // return results;
    

}

plusMinus([1, -20, 3, -40, 0]);