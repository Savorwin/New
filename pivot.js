"use strict";

let high = 127.00,
    low = 121.05,
    close = 122.20;

let pivot = (high + low + close) / 3,
    r1 = (2 * pivot) - low,
    s1 = (2 * pivot) - high,
    r2 = pivot + (r1 - s1),
    s2 = pivot - (r1 - s1),
    r3 = high + 2 * (pivot - low),
    s3 = low - 2 * (high - pivot);

console.log(`Точка pivot: ${pivot}`);
console.log(`Сопротивление r1: ${r1}`);
console.log(`Сопротивление r2: ${r2}`);
console.log(`Сопротивление r3: ${r3}`);
console.log(`Поддержка s1: ${s1}`);
console.log(`Поддержка s2: ${s2}`);
console.log(`Поддержка s3: ${s3}`);