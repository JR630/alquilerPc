
function calcular(){
    
    // VARIABLES
    var idCliente = 1; 
    var valorDia = 35000;
    var equipos = parseInt(document.getElementById("equipos").value);
    var dias = parseInt(document.getElementById("dias").value);
    var diasAdicionales = parseInt(document.getElementById("diasAdicionales").value);
    var opcion = document.getElementById("opcion").value;

    var subtotalInicial;
    var subtotalAdicional;
    var descuentoAdicional;
    var total;
    var mensaje;
    var idCliente;

    if(equipos < 2){
        alert("Debe alquilar mínimo 2 equipos");
        return;
    }

    idCliente = idCliente;
    idCliente = idCliente + 1;

    subtotalInicial = equipos * dias * valorDia;
    subtotalAdicional = equipos * diasAdicionales * valorDia;

    descuentoAdicional = diasAdicionales * 0.02;

    if(descuentoAdicional > 0.20){
        descuentoAdicional = 0.20;
    }

    subtotalAdicional = subtotalAdicional - (subtotalAdicional * descuentoAdicional);

    total = subtotalInicial + subtotalAdicional;

    if(opcion == "2"){
        total = total + (total * 0.05);
        mensaje = "Incremento del 5% por servicio fuera de la ciudad.";
    }
    else if(opcion == "3"){
        total = total - (total * 0.05);
        mensaje = "Descuento del 5% por alquiler en el establecimiento.";
    }
    else{
        mensaje = "Sin descuentos ni incrementos.";
    }

    document.getElementById("resultado").innerHTML =
        "ID Cliente: " + idCliente + "<br>" +
        "Equipos: " + equipos + "<br>" +
        "Días iniciales: " + dias + "<br>" +
        "Días adicionales: " + diasAdicionales + "<br>" +
        mensaje + "<br><br>" +
        "<b>Total a pagar: $" + total.toLocaleString() + "</b>";
}