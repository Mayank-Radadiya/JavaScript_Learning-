//Try to Hover on Function And get info about that function/Method.

let myDate = new Date();

//other two way to declare Date

let NewDate = new Date(2024, 0 , 1)
console.log(NewDate.toDateString());
//Output: Mon Jan 01 2024
// in js Date function month start with 0 and end with 11.

let NewDate1 = new Date("2024-01-05") // in this way month number start with 1.
console.log(NewDate1.toDateString());
//Output: Fri Jan 05 2024

console.log(myDate);
// Output: 2024-04-21T05:06:42.263Z

console.log(myDate.toString());
 // Output:  Sun Apr 21 2024 10:37:39 GMT+0530 (India Standard Time).

 console.log(myDate.toDateString());
 // Output:  Sun Apr 21 2024.

 console.log(myDate.toTimeString());
 // Output:  10:37:39 GMT+0530 (India Standard Time).

 console.log(myDate.toLocaleString());
 // Output:  4/21/2024, 10:37:39 AM.

 console.log(myDate.toLocaleDateString());
 // Output:  4/21/2024.

 console.log(myDate.toLocaleTimeString());
 // Output:  10:37:39 AM.

 console.log(myDate.toUTCString());
 // Output:  Sun, 21 Apr 2024 05:06:42 GMT.

 console.log(myDate.toISOString());
 // Output:  2024-04-21T05:06:42.263Z.

 console.log(myDate.toJSON());
 // Output:  2024-04-21T05:06:42.263Z.

 console.log(myDate.valueOf());
 // Output:  1650490000000.

 console.log(myDate.getTime());
 // Output:  1650490000000.

 console.log(myDate.getTimezoneOffset());
 // Output:  330.

 console.log(myDate.getDay());
 // Output:  0.

 console.log(myDate.getDate());
 // Output:  21.

 console.log(myDate.getHours());
 // Output:  10.

 console.log(myDate.getMinutes());
 // Output:  37.

 console.log(myDate.getSeconds());
 // Output:  39.

 console.log(myDate.getMonth()+1); //because month start with 0. 
 // Output:  4.

 console.log(myDate.getFullYear());
 // Output:  2024.

 console.log(myDate.getMilliseconds());
 // Output:  263.
