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
exports.Revista = void 0;
var ClassPadre_1 = require("./ClassPadre");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(pNombre, pAutor, pPrecio, pNumero, pAño) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.numero = pNumero;
        _this.año = pAño;
        return _this;
    }
    Revista.prototype.getNumero = function () {
        return this.numero;
    };
    Revista.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Revista.prototype.getAñO = function () {
        return this.año;
    };
    Revista.prototype.setAñO = function (año) {
        this.año = año;
    };
    return Revista;
}(ClassPadre_1.TipoElemento));
exports.Revista = Revista;
