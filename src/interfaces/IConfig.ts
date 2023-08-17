export interface IConfig {
    id: number,
    demandaEspontanea: boolean,
    loginComSenha: boolean,
    modulo: number,
    urlAtend: string,
    dataAlteracao: Date,
    usuarioAlterouId: string,
    usuarioAlterou: {
        id: string,
        nome: string,
        cidadeId: number,
        tentativaLogin: number,
        userClaims: any[],
    }
}