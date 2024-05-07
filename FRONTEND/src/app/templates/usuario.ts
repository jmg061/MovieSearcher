import { pelicula } from "./pelicula";

export interface User {

    id?: number;
    usuario: string;
    contrasenna: string;
    peliculasVistas?: pelicula[];
    peliculasPendientes?: pelicula[];

}