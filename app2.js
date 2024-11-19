//Definicion de la clase ciclista
class Ciclista {
    //Constructor para inicializar la distancia recorrida
    constructor(distanciaRecorrida){
        this._distanciaRecorrida = distanciaRecorrida;
    }

    //Getter para obtener la distancia recorrida y verificar el estado del ciclista
    get distanciaRecorrida(){
        if(this._distanciaRecorrida > 0){
            console.log("El ciclista esta en movimiento.")
        }else{
            console.log("El ciclista actualmente esta parado.")
        }
    }
    
    //Setter para establecer una nueva distancia.
    set distanciaRecorrida(nuevaDistancia){
        //Verificar que la distancia sea mayor que cero
        if(nuevaDistancia > -1){
            this._distanciaRecorrida = nuevaDistancia;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${nuevaDistancia}`);
        }else {
            console.log("El valor de la distancia debe de ser mayor que 0."); //Mensaje de error si la distancia es invalida
        }
    }
}

const ciclista1 = new Ciclista(25);
ciclista1.distanciaRecorrida;
ciclista1.distanciaRecorrida = 0;
ciclista1.distanciaRecorrida;