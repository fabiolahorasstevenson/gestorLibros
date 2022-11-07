import { Articulo } from "./ClassArticulo";

export class Libro extends Articulo {
    private generoLiterario: string;
    private resumen: string;
    private cantPaginas: number;

    public constructor(pNombre: string, pAutor: string, pPrecio: number, pGeneroLiterario: string, pResumen: string, pCantPaginas: number) {
        super(pNombre, pAutor, pPrecio);
        this.generoLiterario = pGeneroLiterario;
        this.resumen = pResumen;
        this.cantPaginas = pCantPaginas;
    }

    public getGeneroLiterario(): string {
        return this.generoLiterario;
    }

    public setGeneroLiterario(generoLiterario: string): void {
        this.generoLiterario = generoLiterario;
    }

    public getResumen(): string {
        return this.resumen;
    }

    public setResumen(resumen: string): void {
        this.resumen = resumen;
    }

    public getCantPaginas(): number {
        return this.cantPaginas;
    }

    public setCantPaginas(cantPaginas: number): void {
        this.cantPaginas = cantPaginas;
    }
}