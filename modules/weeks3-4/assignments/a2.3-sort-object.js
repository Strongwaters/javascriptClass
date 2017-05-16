/**
 * @file
 * Data constantly is being sorted and searched.  In this assignment, you'll
 * sort through the book list in books.json.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

/**
 * Gets the first ten books from the database.
 * @return {Array} An array of books containing the first ten entries.
 */
var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Sort the inputted set of books by name.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 * @returns {Array} An array of books, sorted by name.
 */
function sortByName(books, asc = true) {
    let newArr = [];
    //iterate through books.json
    for(let i = 0; i < books.length; i++){
       //declaring sBooks to books[i]for convience 
        let sBooks = books[i];
        //using publisher text for better display of ascending order
        return(books.sort(function(b1 , b2))
        let b1Titles = sBooks.publisher_text || sBooks.title_latin;
        let b2Titles = sBooks.publisher_text || sbooks.title_latin;
       items.sort(function(a, b) {
  
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
        
    }
   
    
    //return books;
}
sortByName(getFirstTenBooks());
/** 
 * Sort the inputted set of books by author.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 * @returns {Array} An array of books, sorted by name.
 */
function sortByAuthor(books, asc = true) {
   // return books;
}

module.exports.sortByName = sortByName;
module.exports.sortByAuthor = sortByAuthor;