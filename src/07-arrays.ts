(() => {
const price = [1,2,3,4, 'hola', true];
// price.push('aaa');
// price.push(true);
// price.push({});
price.push(12345);

let products = ['hola', true];
products.push(false);

let mixed: (number | string | boolean | object)[] = ['hola', true];
mixed.push(12);
mixed.push('h');
mixed.push(true);
mixed.push({});
mixed.push([]);

const numbers = ['asdfgh'];
numbers.map(i => i * 2);

})();
