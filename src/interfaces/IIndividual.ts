import { IBaseInterface } from './IBaseInterface';

export interface IIndividual extends IBaseInterface {
	estabelecimentoId: string;
	cpf: string;
	username: string;
	email: string;
	telefoneCelular: string;
	nomeCompleto: string;
	nomeSocial?: string;
	nomeDaMae: string;
	dataNascimento: string;
	idade?: number;
	sexo: number;
	racaOuCor: number;
	latitude: number;
	longitude: number;
	logradouro?: string;
	logradouroNumero?: string;
	logradouroComplemento?: string;
	logradouroCep?: string;
	logradouroBairro?: string;
	ufAbreviado?: string;
	cidadeId: string;
	respondeuComorbidade: boolean;
	codigoAutenticacao: string;
	ativo: boolean;
	dataInicioSintomas: string;
	imagem: string | undefined;
	face?: string;
	documentFront?: string;
	documentBack?: string;
	cns?: string;
	nomeResponsavel?: string;
	cpfResponsavel?: string;
	grauParentescoResponsavel?: number;
	isAddress?: boolean;
	imageBase64?: string;
	temMaeDesconhecida?: boolean;
	temPaiDesconhecido?: boolean;
	pisPasep?: string;
	nomeDoPai?: string;
	nacionalidadeCidadao?: number;
	ufDeNascimentoAbreviado?: string;
	cidadeDeNascimentoIbge?: string;
	naturalizacaoData?: string;
	naturalizacaoPortaria?: string;
	paisDeNascimento?: number;
	dataEntradaNoPais?: string;
	frequentaEscola?: boolean;
	grauDeInstrucao?: number;
}
