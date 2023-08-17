export function isValidCNS(cns: string) {
	cns = String(cns).replace(/\D/g, '');
	if (cns.length !== 15) return false;

	return (
		cns.split('').reduce(function (sum, digit, index) {
			return sum + parseInt(digit, 10) * (15 - index);
		}, 0) %
			11 ===
		0
	);
}
