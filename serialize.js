// Сериализация (сжатие) массива целых чисел в строку
const serialize = arr => arr.join('').replace(/(.)\1*/g, match => match.length + match[0]);

// Десериализация (распаковка) строки в массив целых чисел
const deserialize = str => str.match(/./g).reduce((acc, val, i, arr) => (i % 2 === 0 ? acc.concat(Array(parseInt(arr[i], 10)).fill(parseInt(arr[i + 1], 10))) : acc), []);
