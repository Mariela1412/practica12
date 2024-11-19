//Definicio de la clase coche
class Coche {
    //Constructor que inicializa la marca, el modelo y la velocidad del coche
    constructor(marca, modelo, velocidad = 0){
        this._marca = marca;
        this._modelo = modelo;
        this._velocidad = velocidad;
    }

    //Getter para obtener la velocidad actual del coche
    get velociad(){
        return this._velocidad;
    }

    //Metodo para acelerar el coche, aumentando su velocidad
    acelerar(incremento){
        //Verificar si el incremento de velocidad del coche es positivo
        if(incremento > 0){
            this._velocidad += incremento; //Aumentar la velocidad
            console.log(`El coche ha acelerado. Nueva velocidad ${this._velocidad} km/h`);
        }else{
            console.log(`El incremento de velocidad debe de ser mayor a 0.`);
        }
    }

    //Metodo para frenar el coche, disminuyendo su velocidad
    frenar(decremento){
        //Verificar que el decremento de la velocidad sea positivo y no exceda la velocidad del coche
        if(decremento > 0 && this._velocidad - decremento >= 0){
            this._velocidad -= decremento; //Disminuir la velocidad
            console.log(`El coche ha frenado. Nueva velocidad: ${this._velocidad} km/h.`); //Mensaje de confirmacion
        }else if(this._velocidad - decremento < 0){
            console.log("El decremento de velocidad es demasiado alto. El coche se dentendria."); //Mensaje si el decremento es demasiado alto.
        }else {
            console.log("El decremento debe de ser mayor a 0."); //Mensaje de error si el decremento es invalido
        }
    }

    //Metodo mostrar informacion del coche
    mostrarInfo(){
        console.log(`Coche ${this._marca} ${this._modelo}, velocidad actual: ${this._velocidad} km/h.`); //mensaje mostrando la informacion actual del coche.
    }
}

//Crear una instancia de la clase Coche con marca y modelo
const miCoche = new Coche("Toyota", "Corolla"); 

//Mostra informacion inicial del coche.
miCoche.mostrarInfo();
//El coche acelera 25 km/h
miCoche.acelerar(25);
//Mostramos la informacion actualizada del coche
miCoche.mostrarInfo();
//El coche trata de frenar 30 km/h peroe es mayor a la velocidad actual
miCoche.frenar(30); //Muestra mensaje de error
//El coche frena 10km/h
miCoche.frenar(10); //Muestra mensaje exitoso
//Mostramos la informcacion del coche actualizada.
miCoche.mostrarInfo();
