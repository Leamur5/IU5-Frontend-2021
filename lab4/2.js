/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let reversed_str = str.split("").reverse().join("");
    return str === reversed_str;
}
//console.log(isPalindrome('a'));
module.exports = isPalindrome;