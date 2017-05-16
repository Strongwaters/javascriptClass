/**
 * Conditionals, lesson 2.3
 * @author Mike Whitfield
 * 
 * Conditionals are blocks of code that utilize statements resolving to 
 * true/false values.  If a conditional statement is true, then its block of
 * code executes.
 * 
 * Conditionals can be combined into if/else if/else statements.  This ensures
 * that only one of the blocks in the series executes.  Conditionals can be
 * nested as well.
 * 
 * Finally, logical operators can be used to relate conditional statements
 * using AND/OR/XOR/NOT.  Each of these values are significant and are
 * fundamental to the operation of a computer at a low level.
 * 
 * https://en.wikipedia.org/wiki/Truth_table
 * 
 */

var someFile = 'happy.class.js'; // a string, 'member?
if (someFile.endsWidth('class.js')) {
    // code inside this block runs
} else {
    // code inside this block does not run
}