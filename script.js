"use strict";

function calculateVolumeAndArea(a) {
    if (typeof(a) === "number" && a === Math.round(a) && a > 0) {
        let volume = a * a * a;
    let square = 6 * (a * a);
    return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
} else {
    return console.log("При вычислении произошла ошибка");
}
    }
    
//calculateVolumeAndArea(36);


function getCoupeNumber(seatNumber) {
    if (seatNumber < 0 || seatNumber !== Math.round(seatNumber) || typeof(seatNumber) !== "number") {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    } 
    
    if (seatNumber === 0 || seatNumber > 36) {
        return console.log("Таких мест в вагоне не существует");
    } 

    if (seatNumber >= 1 || seatNumber <= 36) {
        return console.log(`Номер вашего места: ${seatNumber}, номер купе: ${Math.ceil(seatNumber / 4)}`); 
    }
}

getCoupeNumber(15);