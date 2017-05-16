/**
 * @file
 * This function has you searching by author and by title.  You'll want to 
 * distinguish between an exact match or a partial match for this assignment.
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
var getFirstTenBooks = function () {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Return all books matching the title.
 * @param {Array} books The array of books.
 * @param {String} title The title string.
 * @param {Boolean} partial (Optional) If true, matches using indexOf.
 * @returns {Array} An array of results.  Returns zero-length array if no 
 * matches found.
 */
function searchTitle(books, title, partial) {
    //array to push searched data into
    let newArr = [];
    //itterating through the books
    for (let i = 0; i < books.length; i++) {
        //assigning allBooks to books[i]
        let allBooks = books[i];
        //access property of title 
        let bookTitle = allBooks.title || allBooks.title_latin;
        //using partial method 
     
        if (partial) {
            ///check for partal match using .indexof method
            // console.log('enter partial true\n\n');-checks to see if in loop
            if (bookTitle.indexOf(title) != -1) {
                newArr.push(books[i]);
            }

        } else {
            //console.log('enter exact true\n\n')-checks to see if in loop
            //finds exact match of titles
            if (bookTitle === title) {
                newArr.push(books[i]);

            }

        }

    }
    return newArr;
}//function block
searchTitle(getFirstTenBooks(),'Inside' , true);
/** 
 * Return all books matching the author.
 * @param {Array} books The array of books.
 * @param {String} author The author string.
 * @param {Boolean} partial (Optional) If true, matches using indexOf.
 * @returns {Array} An array of results.  Returns zero-length array if no 
 * matches found.
 */
function searchAuthor(books, author, partial) {
    let aArr = [];

    for (let i = 0; i < books.length; i++) {
        if (!books[i].hasOwnProperty('author_data')) {
            continue;
        }
        for (let j = 0; j < books[i].author_data.length; j++) {
            let authorName = books[i].author_data[j]['name'];
            let allBooks = books[i];
            //console.log(authorName);
            if (partial) {
                ///check for partal match using .indexof method
                if (authorName.indexOf(author) != -1) {
                    //console.log(allBooks);
                    aArr.push(books[i]);    
                }

            }  else {
                //finds exact match of authors
                if (authorName == author) {
                    aArr.push(books[i]);

                } 

            }
        }

    }
    return aArr;
}
module.exports.searchAuthor = searchAuthor;
module.exports.searchTitle = searchTitle;