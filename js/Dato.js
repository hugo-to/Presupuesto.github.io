class Dato {
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        return this._descripcion = descripcion;
    }


    get valor(){
        return this._valor;
    }

    set valor(valor){                   // recibimos un parametro y lo utilizamos para modificar el atributo de nuestra clase.
        return this._valor = valor; 
    }



}; 