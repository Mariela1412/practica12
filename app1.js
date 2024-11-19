//Definicion de la clase Articulo
class Articulo {
    //Constructor para inicialzar los atributos nombre, precio y stockk
    constructor(nombre, precio, stock) {
        this._nombre = nombre; //Nombre del producto
        this._precio = precio; //Precio del producto
        this._stock = stock; //Stock del disponible  
    }
    comprar(cantidad) {
        //Verificar si la cantidad es valida y si hay suficiente stock
        if (cantidad > 0 && this._stock > 0 && this._stock - cantidad >= 0){
            this._stock -= cantidad; // Reducir el stock por la cantidad comprada
            let total = cantidad * this._precio; // Calcular el precio total
    
            //Menasje si se compro mas de una unidad
            if (cantidad > 1){
                console.log(`Usted ha comrpado ${cantidad} unidades del producto ${this._nombre} - Total: $${total}.`)
            } else {
                console.log(`Usted ha comprado ${cantidad} unidad del producto ${this._nombre} - Total: $${total}`)
            }
        }
    
        //Mensaje si el stock es de ceroo
        else if(this._stock <= 0){
            console.log(`El producto ${this._nombre} esta agotado actualmente.`)
        }
        //Mensaje si la cantidad deseada supera el stock disponible
        else if(this._stock - cantidad < 0){
            console.log(`La cantidad que desea comprar no esta disponible en stock, actualmente solo hay ${this._stock}.`)
        }
        //Mensaje si la cantidad es invalida
        else{
            console.log("La cantidad debe ser mayor a 0.")
        }
    }

    //Metodo reabastecer el producto
    reabastecer(cantidad){
        //Verificar si la cantidad de reabastecimiento es valida
        if(cantidad > 0){
            this._stock += cantidad; //Aumentar el stock en la cantidad indicada
            console.log(`Reabasteciendo el stock - Cantidad disponible del producto ${this._nombre} = ${this._stock}.`)
        }else{
            console.log("La cantiad que desea reabastecer debe ser mayor a 0.")
        }
    }
}

//Crear una instancia de la clase Articulo
const ART = new Articulo("Jabon", 20, 10);

//Llamadas al metodo comprar con diferentes cantidades 
ART.comprar(11); //Intentando comprar 11 unidades, esperando el mensaje de advertencia de stock
ART.comprar(1); //Esperando mensaje exitoso

//Reabastecer el producto
ART.reabastecer(20);//Reabastecer con 20 unidades (esperando: stock actualizado)


//Comprar una mayor cantidad
ART.comprar(15);//Comprar 15 unidades (mensaje exitoso)