import { peliculamdb } from "./peliculamdb";

export interface mdbtemplate {

    page: number;
    results: peliculamdb[];
    total_results: number;
    total_pages: number;

}