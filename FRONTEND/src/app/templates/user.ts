import { pelicula } from "./pelicula";

export interface User {

    id?: number;
    user: string;
    password: string;
    peliculasVistas?: pelicula[];
    peliculasPendientes?: pelicula[];

}