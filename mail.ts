
export class Mail{
    private _tipo:string;
    private _direccion:string; 

    constructor (tip:string,dir:string){ 
        this._tipo=tip;
        this._direccion=dir;
    }

    public get tipo():string{
        return this._tipo;
    }

    public set tipo(value:string){
        this._tipo=value;
    }

    public get direccion():string{
        return this._direccion;
    }

    public set direccion(value:string){
        this._direccion=value;
    }
}