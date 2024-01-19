(() => {
let productTitle = 'My amazing product';
let productPrice = 100;
let isNew: boolean = false;
// productTitle = null;
// productTitle = () = {};
// productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "bla bla bla bla bla bla ASD";
  console.log('productTitle', productTitle);

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `
  console.log(summary);
  let myString: string = '';


})();
