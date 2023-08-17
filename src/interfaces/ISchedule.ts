import { IBaseInterface } from './IBaseInterface';
import { IEstablishment } from './IEstablishment';
import { IProcedure } from './IProcedure';
import { IProfessional } from './IProfessional';

export interface ISchedule extends IBaseInterface {
	individuoId?: string | undefined;
	profissionalId: string;
	estabelecimentoId: string;
	procedimentoId: string;
	dia: string;
	hora: string;
	tipoDaConsulta: string;
	observacoes?: string;
	ativo?: boolean;
	estabelecimento?: IEstablishment;
	profissional?: IProfessional;
	procedimento?: IProcedure;
	presencaConfirmada?: boolean;
	finalizado?: boolean;
	emAndamento?: boolean;
	pressaoSanguinea?: string;
	oxigenacaoSanguinea?: string;
	batimentoCardiaco?: string;
	altura?: string;
	peso?: string;
	temperatura?: string;
	cancelado?: boolean;
	pagamentoId?: string;
	retorno: boolean;
	retornoAgendamentoId?: string;
	vinculoRetorno?: boolean;
}
