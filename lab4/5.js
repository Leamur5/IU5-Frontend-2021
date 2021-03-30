/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    const open_brackets = ['(', '[', '<'];
    const close_brackets = [')', ']', '>'];
    let brackets = [];
    str.split("").forEach(function(item, i, arr) {
        if (open_brackets.includes(item)) {
            brackets.push(item);
        } else {
            if (brackets.length > 0) {
                last = brackets[brackets.length - 1];
                if ((open_brackets.includes(last)) && (open_brackets.indexOf(last) === close_brackets.indexOf(item))) {
                    brackets.pop();
                }
            }
        }
    });
    //console.log(brackets.length === 0);
    return brackets.length === 0;
}
//checkBrackets('[(<>)]');
module.exports = checkBrackets;