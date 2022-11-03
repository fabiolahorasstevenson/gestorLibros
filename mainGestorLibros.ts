import { Libreria } from './ClaseLibreria';
import { Libro } from './ClaseLibro';
import { TipoElemento } from './ClassPadre';
import { Cliente } from './ClaseCliente';
import { Revista } from './ClaseRevista';

let arrayAutores= ["Shakespare","Paulo Cohelo","Stephen King"];
let arrayGeneros = ["Terror","Comedia","Autoayuda"];
let revista1= new Revista("Magazine","Clarin",200,20,2021);
let revista2= new Revista("Caras","Empresa Caras",290,21,2021);
let revista3= new Revista("El Gráfico","Grupo Clarin",340,34,2021);
let libro1 = new Libro("Quién se llevó mi queso","Spencer Jonson",2300,"Desarrollo Personal","Es un libro muy interesante",106);
let libro2 = new Libro("El señor de los Anillos","J.R.Tolkien",6540,"Literatura fantástica","Es un libro muy interesante",390);
let libro3 = new Libro("Alicia en el Pais de las Maravillas","Lewis Carol",2990,"Fantasía","Es un libro muy interesante",120);
let cliente1 = new Cliente("Pedro","Lopez","20123455","San Martin 1120","2901345678",arrayAutores,arrayGeneros,10);
let cliente2 = new Cliente("Jose","FLores","30233999","Gdor. Paz 1420","2901546789",arrayAutores,arrayGeneros,15);
let cliente3 = new Cliente("Laura","Lamas","23678903","Gdor. Deloqui 350","2901608877",arrayAutores,arrayGeneros,30);

let arrayLibros = [libro1,libro2,libro3];
let arrayRevistas = [revista1,revista2,revista3];
let arrayClientes = [cliente1,cliente2,cliente3];
let libreria = new Libreria(arrayLibros,arrayRevistas,arrayClientes);

console.log("El precio es del libro "+libro1.getNombre() +" es: "+libreria.calcularPrecio(cliente1,libro1)+" para el cliente "+cliente1.getApellidoCliente());
console.log("El precio es del libro "+libro1.getNombre() +" es: "+libreria.calcularPrecio(cliente2,libro1)+" para el cliente "+cliente2.getApellidoCliente());
console.log("El precio es del libro "+libro1.getNombre() +" es: "+libreria.calcularPrecio(cliente3,libro1)+" para el cliente "+cliente3.getApellidoCliente());
