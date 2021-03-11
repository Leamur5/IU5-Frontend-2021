/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let min, max;
    let number = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            if (number === '') {
                number = str[i];

            } else {
                number += str[i];
            }
            if (typeof(str[i + 1]) != "number" || str[i + 1] != '.') {
                if (min === undefined) {
                    min = max = parseFloat(number);
                } else {
                    if (parseFloat(number) > max) {
                        max = parseFloat(number);
                    } else if (parseFloat(number) < min) {
                        min = parseFloat(number);
                    }
                }
            }
        } else if (str[i] === '-') {
            number = '-';

        } else if (str[i] === '.') {
            number += str[i];

        } else {
            number = '';
        }

    }
    let answer = {
        "max": max,
        "min": min
    };


    return answer;
}


module.exports = getMinMax;