const cuentas = {
    174153: {
        nombreCompleto: 'Didier Thomas', 
        nip: 9867, 
        saldo: 550
    },
    984356: {
        nombreCompleto: 'Luis Castro',
        nip: 2309,
        saldo: 600,
    },
    145158: {
        nombreCompleto: 'Regina Morton',
        nip: 5090,
        saldo: 875,
    }
};

/*Función que encuentra un elemento en el HTML y devuelve su valor*/
function input(id) {
    return document.getElementById(id).value;
};

/*Función que da la hora y los minutos del día en formato 24hrs*/
function horaDelDia() {
    var date = new Date;
    return (`${date.getHours()}${date.getMinutes()}`);
};

/*Función que da las Buenas... según la hora del día*/
function saludoPorHora(cliente) {
    let saludo;
    let hora = horaDelDia();
    if(hora >= "0000" && hora <= "1159"){
        saludo = `Buenos días ${cuentas[cliente].nombreCompleto}`;
    }
    else if(hora >= "1200" && hora <= "1859"){
        saludo = `Buenas tardes ${cuentas[cliente].nombreCompleto}`
    }
    else{
        saludo = `Buenas noches ${cuentas[cliente].nombreCompleto}`
    }
    return saludo;
};

/*Función que valida el nip ingresado por el cliente contra el de la base de datos*/
function validacioNip(cliente) {
    let nipInput = input("NIP");
    let nipCliente = cuentas[cliente].nip;
    if(nipInput == nipCliente){
        alert(saludoPorHora(cliente))
    }
}

/*Función que valida el numero de cuenta ingresado por el cliente contra el de la base de datos*/
function validacionUsuario() {
    let cliente = input("Cuenta");
    let bandera = false;
    for (let index = 0; index < Object.keys(cuentas).length; index++) {
        if(bandera == true) {break;}
        let element = Object.keys(cuentas)[index];
            if (cliente == element){
                bandera = true;
            }
            else{
            }        
    }
    // if(bandera){
    //     validacioNip(cliente);
    // }
    // else{
    //     alert("Hay algun error en los datos que ingresaste.");
    // }
    return bandera;
};

function consultarSaldo(cliente) {
    return alert(`Su saldo disponible es de $${cuentas[cliente].saldo}`);
};

function ingresarMonto(cliente) {
    let deposito = Number(prompt("Ingresa el monto a depositar"));
    let nuevoSaldo = cuentas[cliente].saldo + deposito;
    if(reglaDeNegocio(nuevoSaldo)){
        alert(`${cuentas[cliente].nombreCompleto} ingresaste $${deposito}, tu nuevo total es de $${nuevoSaldo}`);
    }
};

function retirarMonto(cliente) {
    let retiro = Number(prompt("Ingresa el monto a retirar"));
    let nuevoSaldo = cuentas[cliente].saldo - retiro;
    if(reglaDeNegocio(nuevoSaldo)){
        alert(`${cuentas[cliente].nombreCompleto} retiraste $${retiro}, tu nuevo total es de $${nuevoSaldo}`);
    }
};

function reglaDeNegocio(nuevoSaldo) {
    if(nuevoSaldo > 990 || nuevoSaldo < 10){
        alert("Operación invalidad");
        return false;
    }
    else{
        
    }
    return true;
};

function opciones() {
    switch (key) {
        case value:
            consultarSaldo(cliente);
            break;

        case value:
            ingresarMonto(cliente);
            break;
        
        case value:
            retirarMonto(cliente);
            break;
    
        default:
            break;
    }
}