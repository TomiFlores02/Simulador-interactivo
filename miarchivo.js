let ivaCalculator = prompt ("¿Quiere saber lo que paga de IVA en ropa?");

if (ivaCalculator === ("si" || "Si")){

    alert ("Joya");

    let clothes = prompt ("Necesito que me diga la cantidad y el tipo de ropa");

    let price = parseInt (prompt("Ahora, dígame el precio sin el '$'"));

    let ivapercentage = parseInt (prompt("También voy a necesitar que me diga el porcentaje del IVA sin el '%'"));

    let calculateIva = price * ivapercentage / 100;

    let resultWithoutIva = price - calculateIva;

    result = "El precio de lxs " + clothes + " con IVA es $" + price + ". Pero sin el IVA, que es el " + ivapercentage + "%," + " es de " + resultWithoutIva + "%";
    
    alert (result);

} else{
    let ivaCalculator = prompt ("¿Está segurx?");
    
    alert ("La baja :(");
}