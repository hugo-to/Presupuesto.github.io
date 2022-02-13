//cada uno de estos elementos debe tener un identificador único.
// vamos a crear con atributos estaticos los elementos que vamos a utilizar .
class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}
