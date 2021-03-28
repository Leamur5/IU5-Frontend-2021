/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */



function curry(f) {
    var num_of_args = f.length;

    return function f1(...args) {
        if (args.length >= num_of_args) {
            return f(...args);
        } else {
            return function f2(...nextArgs) {
                var newArgs = args.concat(nextArgs);
                return f1(...newArgs);
            }
        }
    }
}


module.exports = curry;