export enum Role {
    ADMIN = 'ADMIN',

    EMPLOYEE = 'EMPLOYEE',
    VETERINARIAN = 'VETERINARIAN',
}

export interface IRole {
    name: Role;
}
