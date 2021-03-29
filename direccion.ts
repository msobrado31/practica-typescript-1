
export class Direccion {
    private _calle:string;
    private _numero:number;
    private _piso:number;
    private _letra:string;
    private _codigoPostal:number;
    private _población:string;
    private _provincia:string;

    constructor (cll:string,num:number,pis:number,lt:string,cp:number,pob:string,pro:string){
        this._calle=cll;
        this._numero=num;
        this._piso=pis;
        this._letra=lt;
        this._codigoPostal=cp;
        this._población=pob;
        this._provincia=pro;
    }

    public get calle():string{
        return this._calle;
    }

    public set calle(value:string){
        this._calle=value;
    }

    public get numero():number{
        return this._numero;
    }

    public set numero(value:number){
        this._numero=value;
    }

    public get piso():number{
        return this._piso;
    }

    public set piso(value:number){
        this._piso=value;
    }
   
    public get letra():string{
        return this._letra;
    }

    public set letra(value:string){
        this._letra=value;
    }

    public get codigoPpostal():number{
        return this._codigoPostal;
    }

    public set codigoPostal(value:number){
        this._codigoPostal=value;
    }

    public get poblacion():string{
        return this._población;
    }

    public set poblacion(value:string){
        this._población=value;
    }

    public get provincia():string{
        return this._provincia;
    }

    public set provincia(value:string){
        this._provincia=value;
    }
}