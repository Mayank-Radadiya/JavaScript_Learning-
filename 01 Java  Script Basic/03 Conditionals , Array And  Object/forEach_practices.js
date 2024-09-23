const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  console.log("which books are publish after 2000");
  books.forEach( (item) => {
    if(item.publish > 2000){
        console.log(`${item.title} : ${item.publish}  `)
    }
  })
  //Output:
// Book Five : 2009
//  Book Eight : 2011


 let PublishAfter2000 = books.filter( (book) =>  (book.publish > 2000))
 console.log(PublishAfter2000);
//Output:
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]


  console.log("Books List which is base on  Fiction Story:");
  books.forEach( (item) => {
    if(item.genre == "History"){
        console.log(`${item.title}  `)
    }
  }) 
  //Output: 
//   Book Three
//   Book Seven


let AllHistoryBooks = books.filter( (book) => book.genre == "History")
console.log(AllHistoryBooks);
//Output:
// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

// muLtiple condition at a same time:
let  AllBooks = books.filter( (book) => (book.publish >= 1995 && book.genre =="Science"))
console.log(AllBooks);
//Output:
// [
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   }
// ]
