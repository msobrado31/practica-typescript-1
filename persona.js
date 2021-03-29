"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nom, ape, ed, dni, cum, cf, sex, dir, ml, tf, not) {
        this._nombre = nom;
        this._apellidos = ape;
        this._edad = ed;
        this._dni = dni;
        this._cumpleaños = cum;
        this._colorFavorito = cf;
        this._sexo = sex;
        this._direcciones = [dir];
        this._mails = [ml];
        this._telefonos = [tf];
        this._notas = not;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    set direcciones(value) {
        this._direcciones = value;
    }
    get mails() {
        return this._mails;
    }
    set mails(value) {
        this._mails = value;
    }
    get telefonos() {
        return this._telefonos;
    }
    set telefonos(value) {
        this._telefonos = value;
    }
    get notas() {
        return this._notas;
    }
    addTelefono(tel) {
        this._telefonos.push(tel);
    }
    addMail(mail) {
        this._mails.push(mail);
    }
    addDireccion(dir) {
        this._direcciones.push(dir);
    }
    imprimirPersona() {
        console.log("Soy", this._nombre, '', this._apellidos, "tengo", this._edad, '', "y cumplo años el", this._cumpleaños, "soy", this._sexo, '', "y mi dni es", this._dni, "mi color favorito es", this._colorFavorito, "vivo en", this._direcciones, "mi mail es", this._mails, "mi teléfono es", this._telefonos, "y quiero añadir", this._notas);
    }
    ;
}
exports.Persona = Persona;
