export interface IForgotPasswordForm {
	cpf: string;
	method: 'Email' | 'SMS' | 'WhatsApp';
}
