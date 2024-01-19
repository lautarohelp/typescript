(() => {
  let userId: string | number;
  userId = 123
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }else {
      console.log(`number ${myText.toFixed(1)}`);

    }
  }
  greeting('Lautaro');
  greeting(12.1234567893);
})();
