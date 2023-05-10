/*  Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
    sueldo correspondiente teniendo en cuenta 
    | 1 | 15% |
    | 2 | 10% |
    | 3 | 6% |
    | 4 | 3% | */

    const prompt = require("prompt-sync")({ sigint: true });
    let sueldo = Number(prompt("introduzca su sueldo:"));
    let categoria = Number(prompt("introduzca su categoria:"));

    
    if (categoria === 1) 
    { 
        console.log (`Su sueldo es: ${sueldo * 1.15}`);
    }
    else if (categoria === 2) 
    { 
        console.log (`Su sueldo es: ${sueldo * 1.10}`);
    }
    else if (categoria === 3) 
    { 
        console.log (`Su sueldo es: ${sueldo * 1.06}`);
    }
    else if (categoria === 4) 
    { 
        console.log (`Su sueldo es: ${sueldo * 1.03}`);
    }
    else 
    {
    console.log ("Introduzca una catergoria real");
    }

    //funciona!!!! yeah!

