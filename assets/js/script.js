
function Cliente(nombre, identificador, clave, saldo) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

cliente1 = new Cliente("Carlos Arancibia", "17482334-0", "t576", 125576000);
cliente2 = new Cliente("Gabriel Monardes", "17069700-3", "u976", 321543000);
cliente3 = new Cliente("Alvaro Nuñez", "19374736-1", "f342", 12475500);
cliente4 = new Cliente("Macarena Lopéz", "16463746-0", "m394", 3746700);

let registro = [cliente1, cliente2, cliente3, cliente4]

alert("Bienvenido a banca en linea")
let identificador = prompt("Ingrese su identificador", "17482334-0");
let clave = prompt("Ingrese su clave", "t576");

for (let i = 0; i < registro.length; i++) {
    if (registro[i].identificador == identificador && registro[i].clave == clave) {
        alert(`Bienvenido/a ${registro[i].nombre}`);
        
        var opcion;

        while (opcion != 4){
            opcion = parseInt(prompt(`Seleccione que desea hacer:
                1.- Ver saldo.
                2.- Realizar giro.
                3.- Realizar deposito.
                4.- Salir`))
            switch (opcion) {
                case 1:
                    alert(`Su saldo es ${registro[i].saldo}`);
                    break;
                case 2:
                    let giro = parseInt(prompt(`Su saldo es ${registro[i].saldo} ¿Cuanto desea girar?`))
                    registro[i].saldo = registro[i].saldo - giro;
                    alert(`Ha girado ${giro} nuevo saldo es ${registro[i].saldo}`)
                    break;
                case 3:
                    let deposito = parseInt(prompt(`Su saldo es ${registro[i].saldo} ¿Cuanto desea depositar?`))
                    registro[i].saldo = registro[i].saldo + deposito;
                    alert(`Ha depositado ${deposito} nuevo saldo es ${registro[i].saldo}`)
                    break;
                case 4:
                    alert("Gracias por su preferencia")
                    break;
                default:
                    alert("Opción incorrecta")
                    break;
            }
        }
    } else {
        alert("Error! Datos incorrectos o no se encuentra registrado")
    }
    break;
}