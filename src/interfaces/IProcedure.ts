import { IBaseInterface } from './IBaseInterface';
import { IPrice } from './IPrice';

export interface IProcedure extends IBaseInterface {
	tipo: string;
	codigo: string;
	descricao: string;
	sexo: string;
	cotaTotal: string;
	cotaTotalExecutor: string;
	cotaEstabelecimento: string;
	cotaProfissional: string;
	cotaExecutor: string;
	preco: IPrice;
}
