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

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);//cuts the books.json in to the amount of data designated
}
/** 
 * Filter the inputted books bounded by input year.
 */
function filterByDate(books, yearMin, yearMax) { 
   
   for (let i = 0; i < books.length; i++) {  //iterates through books.jason
        let edIn = books[i].edition_info;//declaring variable for property in object books.json
                                             //also associating it w/ all the books[i
        edIn = edIn.replace(/([^0-9-])+/g, ""); //filters out all other characters
                                               //and numbers other than the 4 digit date
        if(edIn.charAt(0) == '-'){ /////removing the hyphen before the 4 didget date
           edIn = edIn.substring(1); //removes the hypen at that point
        }
        
        edIn = edIn.substring(0,4); 
       
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
 
console.log(books);
return books;
} //function scope
filterByDate(getFirstTenBooks(), 1995, 2012)






     
/*let keepers = [];      //create array to push the books >= year Min value
   
    for(let i = 0; i < books.length; i++) { ///run one less than the array if starting @ 0
        
        if(books[i].year >= yearMin) {
            
            keepers.push(books[i]) 
            
        } 

    } //second for loop

    for(let i = 0; i < books.length; i++) { ///run one less than the array if starting @ 0
        
        if(books[i].year <= yearMax) {
             keepers.push(books[i])
        }
    }
console.log(keepers);*/