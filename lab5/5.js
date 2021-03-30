/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    for (let i = 0; i < arr.length; i++) {
        let first_elem = true;
        arr.forEach(function(item, j, arr) {
            if (arr[i].from === item.to) { first_elem = false; }
        });
        if (first_elem) {
            let b = arr[i];
            arr[i] = arr[0];
            arr[0] = b;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr.forEach(function(item, j, arr) {
            if (item.from === arr[i].to) {
                let b = arr[i + 1];
                arr[i + 1] = arr[j];
                arr[j] = b;
                return;
            }
        });

    }
    return arr;
}

module.exports = makeRoute;