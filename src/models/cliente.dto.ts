export interface ClienteDTO {
    id : string;
    nome : string;
    email : string;
    //? determina que o atributo eh de preenchimento opcional
    imageUrl? : string;
}