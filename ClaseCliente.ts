export class Cliente{
    private nombreCliente :string;
    private apellidoCliente: string;
    private dniCliente: string;
    private direccionCliente: string;
    private telefonoCliente : string;
    private listaAutores: string[]; 
    private listaGeneros: string[];
    private descuento: number;

    constructor (pNombreCliente: string, pApellidoCliente: string, pDNICliente: string, pDireccionCliente: string, pTelefonoCliente: string,
        pListaAutores: string[],pListaGeneros: string[], pDescuento: number){
        this.nombreCliente = pNombreCliente; 
        this.apellidoCliente = pApellidoCliente;
        this.dniCliente = pDNICliente;
        this.direccionCliente = pDireccionCliente;
        this.telefonoCliente = pTelefonoCliente;
        this.listaAutores = pListaAutores;
        this.listaGeneros = pListaGeneros;
        this.descuento = pDescuento;

    }
    public getNombreCliente(): string {
        return this.nombreCliente;
    }

    public setNombreCliente(nombreCliente: string): void {
        this.nombreCliente = nombreCliente;
    }

    public getApellidoCliente(): string {
        return this.apellidoCliente;
    }

    public setApellidoCliente(apellidoCliente: string): void {
        this.apellidoCliente = apellidoCliente;
    }

    public getDniCliente(): string {
        return this.dniCliente;
    }

    public setDniCliente(dniCliente: string): void {
        this.dniCliente = dniCliente;
    }

    public getDireccionCliente(): string {
        return this.direccionCliente;
    }

    public setDireccionCliente(direccionCliente: string): void {
        this.direccionCliente = direccionCliente;
    }

    public getTelefonoCliente(): string {
        return this.telefonoCliente;
    }

    public setTelefonoCliente(telefonoCliente: string): void {
        this.telefonoCliente = telefonoCliente;
    }

    public getListaAutores(): string[] {
        return this.listaAutores;
    }

    public setListaAutores(listaAutores: string[]): void {
        this.listaAutores = listaAutores;
    }
    
    public getListaGeneros():string[]{
        return this.listaGeneros;
    }
    
    public setListaGeneros(listaGeneros: string[]):void{
        this.listaGeneros = listaGeneros;
    }
    
    public getDescuento (): number{
        return this.descuento;
    }
    
    public setDescuento(pDescuento:number): void{
        this.descuento= pDescuento;
    }

    
}