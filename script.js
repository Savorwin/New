"use strict";

let log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');


// параметры по умолчанию

function calcOrDouble(num, basis = 2) {
    //basis = basis || 2; //старый прием
    console.log(num * basis);
}

calcOrDouble(3, 5);
