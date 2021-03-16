/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let arr_return = [];
    arr.forEach(function(item, i, arr) {
        if (item === '') {
            return;
        }
        let sorted_i = item.toLowerCase().split("").sort().join("");
        let arr_anagram = [item];
        for (let j = i + 1; j < arr.length; j++) {
            if (item.length === arr[j].length) {
                let sorted_j = arr[j].toLowerCase().split("").sort().join("");
                if (sorted_i === sorted_j) {
                    arr_anagram.push(arr[j]);
                    arr[j] = '';
                }
            }
        }
        arr_return.push(arr_anagram);
    });
    return arr_return;
}

module.exports = getAnagramms;