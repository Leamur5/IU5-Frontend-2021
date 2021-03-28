/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b : 2})() -> 3
 */


function customBind(f, context) {
    var num_of_args = f.length;
    return function f1(...args) {
        return f.call(context, ...args);
    }
}
module.exports = customBind;