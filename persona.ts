import { Direccion } from "./direccion";
import {Mail} from  "./mail";
import {Telefono} from "./telefono";

export class Persona{
    private _nombre:string;
    private _apellidos:string;
    private _edad:number;
    private _dni:number;
    private _cumpleaños:string;
    private _colorFavorito:string;
    private _sexo:string;
    private _direcciones:Direccion[];
    private _mails:Mail[];
    private _telefonos:Telefono[];
    private _notas:string;

    constructor(nom:string,ape:string,ed:number,dni:number,cum:string,cf:string,sex:string,dir:Direccion,ml:Mail,tf:Telefono,not:string){
        this._nombre=nom;
        this._apellidos=ape;
        this._edad=ed;
        this._dni=dni;
        this._cumpleaños=cum;
        this._colorFavorito=cf;
        this._sexo=sex;
        this._direcciones=[dir];
        this._mails=[ml];
        this._telefonos=[tf];
        this._notas=not;  
    }

    public get nombre():string{
        return this._nombre;
    }

    public get apellidos():string{
        return this._apellidos;
    }

    public get edad():number{
        return this._edad;
    }

    public get dni():number{
        return this._dni;
    }

    public get cumpleaños():string{
        return this._cumpleaños;
    }

    public get colorFavorito():string{
        return this._colorFavorito;
    }

    public get sexo():string{
        return this._sexo;
    }

    public get direcciones():Direccion[]{
        return this._direcciones;
    }

    public set direcciones(value:Direccion[]){
        this._direcciones=value;
    }

    public get mails():Mail[]{
        return this._mails;
    }

    public set mails(value:Mail[]){
        this._mails=value;
    }

    public get telefonos():Telefono[]{
        return this._telefonos;
    }

    public set telefonos(value:Telefono[]){
        this._telefonos=value;
    }

    public get notas():string{
        return this._notas;
    }

    public addTelefono(tel:Telefono):void {
        this._telefonos.push(tel);
    }

    public addMail(mail:Mail):void {
        this._mails.push(mail);
    }

    public addDireccion(dir:Direccion):void {
        this._direcciones.push(dir);
    }

    public imprimirPersona():void{
        console.log("Soy",this._nombre,'',this._apellidos,
                    ", tengo",this._edad,'',"y cumplo años el",this._cumpleaños,
                    ".Soy",this._sexo,'',"y mi dni es",this._dni,
                    ".Mi color favorito es el",this._colorFavorito,
                    ".Vivo en",this._direcciones,
                    ".Mi mail es",this._mails,
                    ".Mi teléfono es",this._telefonos,
                    ".Notas:",this._notas);
    };


}