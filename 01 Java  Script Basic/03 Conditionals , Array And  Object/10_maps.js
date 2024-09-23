let maps = new Map();
// maps is some kind of object.It stored key: value . But map is not stored same value
maps.set("Ind" , "India")
maps.set("USA" , "United States of America")
maps.set("Fr" , "France")
maps.set("Ind" , "India")


console.log(maps);
//Output:
// Map(3) {
//     'Ind' => 'India',  // ind print only one time.
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key, value] of maps) {
    console.log(key, ':-', value);
}
// //Output:
// Ind :- India
// USA :- United States of America
// Fr :- France