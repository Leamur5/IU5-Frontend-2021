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

    return function get_args(...args) {
        if (args.length >= num_of_args) {
            return f(...args);
        } else {
            return function get_next_args(...nextArgs) {
                var newArgs = args.concat(nextArgs);
                return get_args(...newArgs);
            }
        }
    }
}


module.exports = curry;