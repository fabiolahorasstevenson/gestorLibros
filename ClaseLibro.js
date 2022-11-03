"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libro = void 0;
var ClassPadre_1 = require("./ClassPadre");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pNombre, pAutor, pPrecio, pGeneroLiterario, pResumen, pCantPaginas) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.generoLiterario = pGeneroLiterario;
        _this.resumen = pResumen;
        _this.cantPaginas = pCantPaginas;
        return _this;
    }
    Libro.prototype.getGeneroLiterario = function () {
        return this.generoLiterario;
    };
    Libro.prototype.setGeneroLiterario = function (generoLiterario) {
        this.generoLiterario = generoLiterario;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.setResumen = function (resumen) {
        this.resumen = resumen;
    };
    Libro.prototype.getCantPaginas = function () {
        return this.cantPaginas;
    };
    Libro.prototype.setCantPaginas = function (cantPaginas) {
        this.cantPaginas = cantPaginas;
    };
    return Libro;
}(ClassPadre_1.TipoElemento));
exports.Libro = Libro;
