function Cliente(nombre, identificador, clave, saldo) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

let cliente1 = new Cliente("Carlos Arancibia", "17482334-0", "t576", 125576000);
let cliente2 = new Cliente("Gabriel Monardes", "17069700-3", "u976", 321543000);
let cliente3 = new Cliente("Alvaro Nuñez", "19374736-1", "f342", 12475500);
let cliente4 = new Cliente("Macarena Lopéz", "16463746-0", "m394", 3746700);

let clientes = [cliente1, cliente2, cliente3, cliente4];

function buscarCliente(identificador, clave) {
    let found = clientes.find(
        (cliente) =>
            cliente.identificador == identificador && cliente.clave == clave
    );

    return found;
}

function menu(cliente) {
    alert(`Bienvenido ${cliente.nombre} al menú de transacciones del banco X`);
    alert(
        "Las opciones disponibles son:\n1.- Consultar Saldo.\n2.-Realizar giro."
    );
    let continuar = true;

    do {
        opcion = prompt(
            "Debe ingresar una opción:\nLas opciones disponibles son:\n1.- Consultar Saldo.\n2.-Realizar giro."
        );
        switch (opcion) {
            case "1":
                alert(`Su saldo es: ${cliente.saldo}`);
                break;
            case "2":
                break;

            default:
                alert("opción no se encuentra disponible, vuelta a intentar");
                break;
        }
        continuar = confirm("Desea continuar?");
    } while (continuar);

    alert("Gracias por visitarnos.");
}

function main() {
    let rut = prompt("ingrese su identificador.", "17482334-0");
    let clave = prompt("ingrese su contraseña.", "t576");

    let cliente = buscarCliente(rut, clave);

    while (!cliente) {
        alert("Debe asegurarse de ingresar los datos correctamente.");
        let continuar = confirm("Desea continuar o quiere salir?");
        if (!continuar) {
            alert("Gracias por visitarnos");
            return;
        }
        rut = prompt("ingrese su identificaodor.", "17482334-0");
        clave = prompt("ingrese su contraseña.", "t576");
        cliente = buscarCliente(rut, clave);
    }
    menu(cliente);
}