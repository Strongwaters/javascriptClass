/**
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
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


function filterByDate(books, yearMin, yearMax) { 
   
   for (let i = 0; i < books.length; i++) {  //iterates through books.jason
        let edIn = books[i].edition_info;//declaring variable for key in object books.json
                                             //also associating it w/ all the books[i
        edIn = edIn.replace(/([^0-9-])+/g, ""); //filters out all other characters
                                               //and numbers other than the 4 digit date
        if(edIn.charAt(0) == '-'){ /////removing the hyphen before the 4 didget date
           edIn = edIn.substring(1); //removes the hypen at that point
        }
        
        edIn = edIn.substring(0,4); 
       console.log(edIn);
        let pubTex = books[i].publisher_text;//declaring var for value of key in books.json
           pubTex = pubTex.replace(/([^0-9-])+/g, "");//filtering spaces and hyphens
           pubTex = pubTex.substring(0, 4);
      
        let year = -1   ///setting boolean logic
        
        if(edIn)  {

                year = edIn;

        }else if (pubTex){
            
            year = pubTex;
        }
       
     
        books[i].year = year;//creating new property to the object      
    
    } 
    //end of first for loop
    
    //ALL BOOKS HAVE A YEAR PROPERTY!!!!
  for (let i = books.length-1; i >= 0; i--) {
    if (books[i].year < yearMin) {
    books.splice(i,1)                //.splice(location, howmany)
    }
  }
  //for loop end
 for (let i = books.length-1; i >= 0; i--) {
    if (books[i].year > yearMax) {
    books.splice(i, 1)                //.splice(location, howmany)
    }
  }
 
 
 //console.log(books);
  for (let i = 0; i < books.length; i++) {
//console.log(books[i].year);
  } 
 
//console.log(books);
return books;
} //function scope
filterByDate(getFirstTenBooks(), 1995, 2012)



/** 
 * Filter the inputted books bounded by input year.
 * @param {Array} books An array of books.
 * @param {Number} yearMin The start year to filter by.
 * @param {Number} yearMax The end year to filter by.
 * @return {Array} The array of books, filtered by their publish date.
 */
//function filterByDate(books, yearMin, yearMax) {
    


module.exports = filterByDate;