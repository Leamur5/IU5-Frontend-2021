/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let i = 0;
    let str_return = "";
    while (i != str.length) {
        let count = 1;
        while ((i + 1 < str.length) && (str[i] === str[i + 1])) {
            count++;
            i++;
        }
        if (count === 1) {
            str_return = str_return.concat(str[i]);
        } else {
            str_return = str_return.concat(str[i], count);
        }
        i++;
    }
    //console.log(str_return);
    return str_return;
}
rle('');
module.exports = rle;