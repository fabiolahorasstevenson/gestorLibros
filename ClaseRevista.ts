import { TipoElemento } from "./ClassPadre";

export class Revista extends TipoElemento{
    private numero: number;
    private anio: number;

    public constructor(pNombre: string, pAutor: string, pPrecio: number, pNumero: number, pAnio: number){
        super(pNombre,pAutor,pPrecio);
        this.numero= pNumero;
        this.anio = pAnio;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(pAnio: number): void {
        this.anio = pAnio;
    }


}