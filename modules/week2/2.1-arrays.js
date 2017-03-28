/**
 * Arrays, lesson 2.1
 * @author Mike Whitfield
 * 
 * Arrays at their simplest are a set of fixed length datums stored in
 * contingent memory space.  
 * 
 * When arrays are not fixed length, they typically are stored as a Linked List.
 * This is an object where each item in the array has some structure like so:
 *      value       -> the value of the node
 *      nextNode    -> the address of the next node
 *      prevNode    -> the address of the previous node
 *      index       -> (optional) the current position in the list
 * 
 * Most operations performed on an array concern searching and sorting.  While
 * searching and sorting are relatively solved problems for simple cases, there
 * were four decades of academic research to advance the science.  When working
 * with larger and more datasets it becomes relevant to analyze performance.
 * 
 * Still, you should become very familiar for your theoretical learning to
 * understand different searching and sorting algorithms so it builds your 
 * computer science vocabulary.
 * 
 * Array Resources:
 * 1. https://en.wikipedia.org/wiki/Addressing_mode#Base_plus_index
 * 2. https://en.wikipedia.org/wiki/Array_data_structure
 * 3. https://en.wikipedia.org/wiki/Dynamic_array
 * 4. https://en.wikipedia.org/wiki/Linked_list
 * 
 * Searching and Sorting Resources:
 * 
 * 1. https://en.wikipedia.org/wiki/Linear_search
 * 2. https://en.wikipedia.org/wiki/Binary_search_algorithm
 * 3. https://www.toptal.com/developers/sorting-algorithms
 */

var arr = [1, 2, 3];
arr.reverse(); // 3, 2, 1
arr.indexOf(2); // 1
arr.find((value) => {
    return value == 3;
}); // 3