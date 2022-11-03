import { TipoElemento } from "./ClassPadre";

export class Revista extends TipoElemento{
    private numero: number;
    private año: number;

    public constructor(pNombre: string, pAutor: string, pPrecio: number, pNumero: number, pAño: number){
        super(pNombre,pAutor,pPrecio);
        this.numero= pNumero;
        this.año = pAño;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getAñO(): number {
        return this.año;
    }

    public setAñO(año: number): void {
        this.año = año;
    }


}