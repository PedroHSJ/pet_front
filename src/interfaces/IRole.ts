export enum Role {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT',
    EMPLOYEE = 'EMPLOYEE',
    VETERINARIAN = 'VETERINARIAN',
}

export interface IRole {
    name: Role;
}
