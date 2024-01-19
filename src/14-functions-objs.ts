(()=> {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);

  }
  // login('lauatoi@gmail.com', '12345');
  login({
    email:'lauatoi@gmail.com',
    password: 12345
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data : {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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


})();
