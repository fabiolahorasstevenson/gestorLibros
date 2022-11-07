import { Cliente } from "./ClaseCliente";
import { Articulo } from './ClassArticulo';
import { Revista } from "./ClaseRevista";
import { Libro } from "./ClaseLibro";

export class Libreria {
    private libros: Libro[];
    private revistas: Revista[];
    private clientes: Cliente[];

    constructor(pLibros: Libro[], pRevistas: Revista[], pClientes: Cliente[]) {
        this.libros = pLibros;
        this.revistas = pRevistas;
        this.clientes = pClientes;
    }

    public getLibros(): Libro[] {
        return this.libros;
    }

    public setLibros(libros: Libro): void {
        this.libros.push(libros);
    }

    public getRevistas(): Revista[] {
        return this.revistas;
    }

    public setRevistas(revistas: Revista): void {
        this.revistas.push(revistas);
    }

    public getClientes(): Cliente[] {
        return this.clientes;
    }

    public setClientes(clientes: Cliente): void {
        this.clientes.push(clientes);
    }

    public calcularPrecio(cliente: Cliente, articulo: Articulo): number {
        let precioConDescuento: number = 0;
        precioConDescuento = articulo.getPrecio() - (articulo.getPrecio() * cliente.getDescuento()) / 100;
        return precioConDescuento;
    }
}