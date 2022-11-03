"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pNombreCliente, pApellidoCliente, pDNICliente, pDireccionCliente, pTelefonoCliente, pListaAutores, pListaGeneros, pDescuento) {
        this.nombreCliente = pNombreCliente;
        this.apellidoCliente = pApellidoCliente;
        this.dniCliente = pDNICliente;
        this.direccionCliente = pDireccionCliente;
        this.telefonoCliente = pTelefonoCliente;
        this.listaAutores = pListaAutores;
        this.listaGeneros = pListaGeneros;
        this.descuento = pDescuento;
    }
    Cliente.prototype.getNombreCliente = function () {
        return this.nombreCliente;
    };
    Cliente.prototype.setNombreCliente = function (nombreCliente) {
        this.nombreCliente = nombreCliente;
    };
    Cliente.prototype.getApellidoCliente = function () {
        return this.apellidoCliente;
    };
    Cliente.prototype.setApellidoCliente = function (apellidoCliente) {
        this.apellidoCliente = apellidoCliente;
    };
    Cliente.prototype.getDniCliente = function () {
        return this.dniCliente;
    };
    Cliente.prototype.setDniCliente = function (dniCliente) {
        this.dniCliente = dniCliente;
    };
    Cliente.prototype.getDireccionCliente = function () {
        return this.direccionCliente;
    };
    Cliente.prototype.setDireccionCliente = function (direccionCliente) {
        this.direccionCliente = direccionCliente;
    };
    Cliente.prototype.getTelefonoCliente = function () {
        return this.telefonoCliente;
    };
    Cliente.prototype.setTelefonoCliente = function (telefonoCliente) {
        this.telefonoCliente = telefonoCliente;
    };
    Cliente.prototype.getListaAutores = function () {
        return this.listaAutores;
    };
    Cliente.prototype.setListaAutores = function (listaAutores) {
        this.listaAutores = listaAutores;
    };
    Cliente.prototype.getListaGeneros = function () {
        return this.listaGeneros;
    };
    Cliente.prototype.setListaGeneros = function (listaGeneros) {
        this.listaGeneros = listaGeneros;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.setDescuento = function (pDescuento) {
        this.descuento = pDescuento;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
