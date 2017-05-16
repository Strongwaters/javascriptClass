class Anagram{
    constructor(word) {
        this.word = word;

    }
/**
 * 
 * 
 * 
 */
    match(word){
        //if they are the same word its not an anagram
        if (word == this.word){
            return false;
        }
        //if the word doesn't equal the same length of the matching word say false
        if (word.length != this.word.length){
            return false;
        }
        
        //
        for (let letter of word)
            if (this.word.indexOf(letter) == -1) {
                return false;
        }
        

        
        return true;
    }

    matches(...wordArray) {
        for (let word of wordArray) {
            if (this.matches(word)){
                matchesArr.push(word);
            }

}        
        return[]
    }
}
