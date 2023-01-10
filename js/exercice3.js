//1-Prompt the user for a string. It must be a verb.
let verb = prompt("Enter word (it must be a verb)");

//2-If the length of the string is at least 3 and the string doesn’t end with “ing”, 
//add ‘ing’ to the end of the string
if (verb != null) { //On test si une valeur est saisie
    let verbLenght = verb.length;
    if (verbLenght < 3) {
        console.log(verb);
    } else {
        if (verb.substring(verbLenght, verbLenght - 3) == "ing") {
            verb += "ly";
        } else {
            verb += "ing";
        }
        console.log(verb);
    }
} else {
    console.warn("Operation annulée");
}