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
            return "mesa"
        case "2":
            return "cama"
        case "3":
            return "sillaPatio"
    }
}


 

ingresarNombre();
mostrarProductos();
