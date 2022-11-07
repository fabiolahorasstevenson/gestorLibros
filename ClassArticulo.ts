/*Libreria 
Una librería requiere un sistema para sus clientes.
La librería vende libros y revistas. Un libro se compone de un nombre, autor 
(solo uno), precio, cantidad de páginas, un resumen y el género literario que 
abarca (solo uno). Una revista posee un nombre, un autor, un precio, un número 
y un año. Del cliente se guarda su nombre y apellido, dni y dirección, 
una lista de autores favoritos y una lista de géneros que le gusta.
También se guarda el listado de sus compras (sean libros o revistas).
La librería les da descuentos a sus clientes: hay clientes que reciben un 10% 
de descuento, clientes que reciben un 15% de descuento y clientes que reciben 
un 30% de descuento.
Implementar los siguientes servicios:
1. conocer el precio de un libro o revista para un cliente determinado 
(considerando el descuento)
2. conocer si un cliente ya compró un libro o revista determinado.
3. conocer si a un cliente le gusta un libro determinado. 
A algunos clientes les gusta el libro solo si el autor del mismo está en su 
lista de autores favoritos. Pero hay clientes más exigentes que piden que el
autor esté en su lista de favoritos y además que el género también este en su 
lista de géneros favoritos */

export class Articulo{
    
    private nombre: string;
    private autor: string;
    private precio: number;

    constructor (pNombre: string, pAutor: string, pPrecio: number){
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;

    }

    public getNombre():string{
        return this.nombre;
    }
    
    public getAutor(): string{
        return this.autor;
    }

    public getPrecio(): number{
        return this.precio;
    }

   
    public setNombre(pNombre: string): void{
        this.nombre = pNombre;
    }

    public setAutor (pAutor: string): void{
        this.autor = pAutor;
    }

    public setPrecio (pPrecio: number): void{
        this.precio = pPrecio;
    }

 
}