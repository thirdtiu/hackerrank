function staircase(n){
    let stairs = ''
    let stair, hash, space;
    for (var i = 0; i < n; i++){
        space = n - 1 - i;
        hash = i + 1;
        if (i != n-1){
            stair = ' '.repeat(space) + '#'.repeat(hash) + '\n';
        }
        else {
            stair = ' '.repeat(space) + '#'.repeat(hash);
        }
        stairs += stair;
    }
    console.log(stairs);
    return stairs;
}

staircase(5);