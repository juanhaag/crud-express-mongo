class Tarea{
    constructor(contenido,check,user){
        this.contenido = contenido;
        this.check = check;
        this.user = user;
        this.id = Date.now();
    }
}

module.exports = Tarea;