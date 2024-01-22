(()=> {

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    createdAt: Date,
    title: string,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: "Proo1",
    createdAt: new Date(2004, 11, 7),
    stock: 12
  });
  addProduct({
    title: "Proo1",
    createdAt: new Date(2004, 11, 7),
    stock: 12,
    size: 'M'
  });
  console.log(products);
  products.push({
    title: 'Prod3',
    createdAt: new Date(2004, 11, 7),
    stock: 12,
    size: 'S'
  });


})();
