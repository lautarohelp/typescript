(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDynamicVar = 1234
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

})();
