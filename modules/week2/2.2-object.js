/**
 * Objects, lesson 2.2
 * @author Mike Whitfield
 * 
 * At their simplest, objects are key/value containers.  Unlike arrays, object 
 * values are not sorted and not given a numerical index.  This means objects
 * are not necessarily stored in contingent memory space.
 * 
 * Like arrays, object values can be accessed using the subscript operator, i.e.
 * "someArray[0]".  Instead of using numerical values, objects are accessed 
 * with a string value instead, e.g. "someObject['label']".
 * 
 * Unlike arrays, objects can be accessed using the member access operator.
 * This operator combines the name/label of the variable and the "." character,
 * e.g. "console.log".  When typing "console.log", log is a property of the 
 * console object.
 * 
 * Like arrays, objects can store any type of data.  Objects can store numbers,
 * strings, arrays, functions, or even other objects.
 * 
 * We'll learn later that the word, "object" has a special meaning across 
 * programming languages.  For now, it's best to think of objects like key/value
 * stores.
 * 
 * The O(n) lookup time on an object is related to the hash data structure.
 * 
 * 1. https://en.wikipedia.org/wiki/Associative_array
 * 2. https://en.wikipedia.org/wiki/Hash_table
 * 3. https://en.wikipedia.org/wiki/Search_tree
 */

var bookListObj = {
    'Norse Mythology': {
        'author': 'Neil Gaiman',
        'cost': 10.99,
        'coverImg': 'img/norse_mythology.jpg',
        'checkedOut': false,
        'reviewScore': 4.5,
        'comments': [
            {
                'author': 'Person',
                'contents': 'Hey I loved this book!'
            }
        ]
    },
    'Echoes in Death': {
        'author': 'J.D. Robb',
        'cost': 12.99,
        'coverImg': 'img/echoes_in_death.jpg',
        'checkedOut': false,
        'reviewScore': 4.0,
        'comments': [
            {
                'author': 'Person',
                'contents': 'Like, wow what in Hades?'
            }
        ]
    }
};