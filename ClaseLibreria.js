"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pLibros, pRevistas, pClientes) {
        this.libros = pLibros;
        this.revistas = pRevistas;
        this.clientes = pClientes;
    }
    Libreria.prototype.getLibros = function () {
        return this.libros;
    };
    Libreria.prototype.setLibros = function (libros) {
        this.libros.push(libros);
    };
    Libreria.prototype.getRevistas = function () {
        return this.revistas;
    };
    Libreria.prototype.setRevistas = function (revistas) {
        this.revistas.push(revistas);
    };
    Libreria.prototype.getClientes = function () {
        return this.clientes;
    };
    Libreria.prototype.setClientes = function (clientes) {
        this.clientes.push(clientes);
    };
    Libreria.prototype.calcularPrecio = function (cliente, TipoElemento) {
        var precioConDescuento = 0;
        precioConDescuento = TipoElemento.getPrecio() - (TipoElemento.getPrecio() * cliente.getDescuento()) / 100;
        return precioConDescuento;
    };
    return Libreria;
}());
exports.Libreria = Libreria;
