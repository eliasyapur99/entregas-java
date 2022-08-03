//kiosko



function ingresarNombre(){
    alert("Bienvenido a Deep Wood");
    let nombre = prompt ("Ingrese su nombre");
    while (nombre === "" || nombre === null) {
        nombre = prompt ("Ingrese su nombre")
    }
}

function mostrarProductos (){
let producto;
    do{
        producto = prompt ("Que ambiente desea decorar? \n1)Comedor \n2)Dormitorio \n3)Jardín"
        );
    } while (producto != 1 && producto !=2 && producto !=3);
     
    switch(producto){
        case "1":
            return "Comedor"
        case "2":
            return "Dormitorio"
        case "3":
            return "Jardín"
    }
}

function validarPrecio(producto) {
   if (producto === "Comedor"){
    return 150000;
   } else if (producto === "Dormitorio"){
    return 180000;
   }else if (producto === "Jardín"){
    return 35000;
}
}

function cobrar (producto,precio){
    alert("Usted eligió la siguiente categoria: " +
    producto.toUpperCase() +
    "\nPrecios desde $"+ 
    precio
    );

    let abonar = prompt ("Con cuanto paga ? ")
    if (abonar > precio){
        alert("Su vuelto es $" + (abonar - precio))
    }else{
        alert("No tiene dinero suficiente, adios!")
    }

}



 
ingresarNombre();
let productoSeleccionado = mostrarProductos();
let precioProd = validarPrecio(productoSeleccionado);
cobrar(productoSeleccionado,precioProd)