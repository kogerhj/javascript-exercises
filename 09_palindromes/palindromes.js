const palindromes = function (string) {
    let newString = string
        .replace(/[^\w\s\']|_/g, "")
        .toLowerCase()
        .replace(/\s/g,'')
        .split("")
        .join("");
        
        let reverseString = string
        .replace(/[^\w\s\']|_/g, "")
        .toLowerCase()
        .replace(/\s/g,'')
        .split("")
        .reverse()
        .join("");

    if(newString == reverseString) return true;
    else return false;
};

console.log(palindromes("testing"));

// Do not edit below this line
module.exports = palindromes;


(/[^\w\s\']|_/g, "")