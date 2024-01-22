import { addProduct, calcStock, products } from "./product.service";


addProduct({
  name: "Proo1",
  createdAt: new Date(2004, 11, 7),
  stock: 5
});
addProduct({
  name: "Proo1",
  createdAt: new Date(2004, 11, 7),
  stock: 6,
  size: 'M'
});

console.log(products);
const total = calcStock();
console.log(total);


