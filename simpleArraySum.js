function simpleArraySum(ar) {
	console.log (ar.reduce((a, b) => a + b, 0));
	return ar.reduce((a, b) => a + b, 0)
}

simpleArraySum([1, 2, 3]);
