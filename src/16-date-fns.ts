import { subDays, format } from "date-fns"

const date = new Date(2004, 10, 7); // 0 = january
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);


