module.exports = function check(str, bracketsConfig) {

	const BRACKETS_PAIR = new Map(bracketsConfig);
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		let currentSymbol = str[i];
		let topElement = stack[stack.length - 1];

		if (BRACKETS_PAIR.get(topElement) === currentSymbol) {
			stack.pop();
		} else {
			stack.push(currentSymbol)
		}
	}

	return stack.length === 0;
}
