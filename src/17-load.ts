import _ from 'lodash';

const data = [
  {
    username: 'Lauti',
    role: 'admin'
  },
  {
    username: 'nico',
    role: 'seller'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);



