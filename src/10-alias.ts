(() => {
  type UserID = string | number;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  //  Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';

  function greeting2(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }
  greeting2(111, 'S');
  greeting2(111, 'XL');

})();
