let num = 10;
if(num > 10) {
    console.log('bigger than 10');
} else if (num === 10) {
    console.log('equal to 10');
}
 else {
    console.log('smaller than 10');
}
let day = new Date("2025-09-25").getDay();
console.log(day);

if (day === 1) {
    console.log('Esmaspäev');
} else if (day === 2) {
    console.log('Teisipäev');
} else if (day === 3) {
    console.log('Kolmapäev');
} else if (day === 4) {
    console.log('Neiljapäev');
} else if (day === 5 || day === 6) {
    console.log('Pidupäev');
}  else if (day === 0) {
    console.log('Pühapäev');
} else {
    console.log('Imelikpäev');
}

switch(day) {
    case 1:
        comsole.log('esmaspäev');
        break;
           case 2:
        comsole.log('teisipäev');
        break; 
          case 3:
        comsole.log('kolmapäev');
        break;
           case 4:
        comsole.log('neljapäev');
        break;
           case 5:
           case 6:
        comsole.log('pidupäev');
        break;
           case 7:
        comsole.log('pühaäev');
        break;
        default:
            console.log('imelikpäev');
}
 