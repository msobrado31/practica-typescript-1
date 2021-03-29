"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(cll, num, pis, lt, cp, pob, pro) {
        this._calle = cll;
        this._numero = num;
        this._piso = pis;
        this._letra = lt;
        this._codigoPostal = cp;
        this._población = pob;
        this._provincia = pro;
    }
    get calle() {
        return this._calle;
    }
    set calle(value) {
        this._calle = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get piso() {
        return this._piso;
    }
    set piso(value) {
        this._piso = value;
    }
    get letra() {
        return this._letra;
    }
    set letra(value) {
        this._letra = value;
    }
    get codigoPpostal() {
        return this._codigoPostal;
    }
    set codigoPostal(value) {
        this._codigoPostal = value;
    }
    get poblacion() {
        return this._población;
    }
    set poblacion(value) {
        this._población = value;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(value) {
        this._provincia = value;
    }
}
exports.Direccion = Direccion;
