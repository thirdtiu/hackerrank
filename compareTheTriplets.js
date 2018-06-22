function solve(a, b) {
    let result = [];
    let aliceScore = 0;
    let bobScore = 0;
    a.forEach((element, i) => {
        if (element > b[i]) {
            aliceScore += 1;
        } else if (element < b[i]) {
            bobScore += 1;
        }
    });
    result.push(aliceScore, bobScore);
    console.log(result);
    return result;
}

const ALICE = [1, 2, 3];
const BOB = [1, 2, 3];

solve(ALICE, BOB);
