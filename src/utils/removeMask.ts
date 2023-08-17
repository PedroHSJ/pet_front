export function removeMask(text: string) {
	return text.replace(/[^0-9]/g, '').trim();
}
