/**
 * @file
 * This function simplifies the below object.  You need to get really good
 * at composing simple objects into human-readable formats, and you need to
 * likewise break those human-readable objects apart into simple parts so they
 * can be edited.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */
/*Problem: Imput property name Return all values for said property
Solution: will be an array of said properties values
i.e for titles [javascript blah , jsblah]
    for publication text[paperback07, blah]
*/

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Filter the inputted object for just the selected columns.
 */
//keep CODE CLEAN!  watch for scope alignment
                                   ///removed author from function parameter
function filterColumns(books, columns = ['title' , 'author_data']) {
    // new array
    let bookInfo = [];
    //iterate through books.json
    for( let i = 0; i < books.length; i++){
        /*if the book[i] does not equal the set parameters, then delete/remove
        it from the object to then only be left with the set parameters
        in this case currently being title and author_data*/
        let pBooks = books[i].title;
        let pColumns = books[i].author_data;
        console.log(pBooks , pColumns);
        //if (books[i] !== pBooks && books[i] !== pColumns) {
            //return delete['books[i]'];
        
    
        }
    } 
//console.log(books[i])
//}
//calling the function filterColumns using getFirstTenBooks()) -very important!!!
filterColumns(getFirstTenBooks());








//// code below is toward a diff. solution to the problem

//assigning a varibale to the property title in books.json
  /*      let bTitle = books[i]['title'];
        //if( )
        
        //pushing assigned let bTitle in to the new array bookInfo
        bookInfo.push(bTitle);
        //assigning a varibale to the property title in books.json
        let bAuthor = books[i]['author_data'];
        //bAuthor = bAuthor.replace
        bookInfo.push(bAuthor)
       
        console.log(bTitle);
        console.log(bAuthor);
*/

