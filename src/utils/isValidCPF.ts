export function isValidCPF(cpf: string | undefined): boolean {
	if (typeof cpf !== 'string') return false;
	var cpfValid = cpf.replace(/[\s.-]*/gim, '');
	if (
		cpfValid.length !== 11 ||
		!Array.from(cpfValid).filter(e => e !== cpfValid[0]).length
	) {
		return false;
	}
	let soma = 0;
	let resto;
	for (let i = 1; i <= 9; i++)
		soma += parseInt(cpfValid.substring(i - 1, i)) * (11 - i);
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) resto = 0;
	if (resto !== parseInt(cpfValid.substring(9, 10))) return false;
	soma = 0;
	for (let i = 1; i <= 10; i++)
		soma += parseInt(cpfValid.substring(i - 1, i)) * (12 - i);
	resto = (soma * 10) % 11;
	if (resto === 10 || resto === 11) resto = 0;
	if (resto !== parseInt(cpfValid.substring(10, 11))) return false;
	return true;
}
