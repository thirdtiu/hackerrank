function aVeryBigSum(ar) {
	console.log (ar.reduce((a, b) => a + b, 0));
	return ar.reduce((a, b) => a + b, 0)
}

const input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(input);