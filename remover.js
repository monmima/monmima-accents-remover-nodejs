// to run this file ===> "node remover.js" or "node remover"

// 1. loading librairies
const path = require("path");
const fs = require("fs");

// 2. - https://nodejs.dev/learn/reading-files-with-nodejs
// This needs to be an async function or else the output is going to be "undefined"
function readFromFile(whatFileName) {
    try {
        const data = fs.readFileSync(whatFileName, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

// 3. - https://flaviocopes.com/javascript-regular-expressions/#regular-expressions-choices
function replaceData(whatData) {
    // 1. creating variables
    let newData = whatData;

    /**
     * This is where the magic (regular expression magic) happens!
     * 
     */

    newData = newData.replace(/[À|Á|Â|Ä|Ā|Ǎ]/gm, `A`);
    newData = newData.replace(/[È|É|Ê|Ë|Ē|Ě]/gm, `E`);
    newData = newData.replace(/[Ì|Í|Î|Ï|Ī|Ǐ]/gm, `I`);
    newData = newData.replace(/[Ò|Ó|Ô|Ö|Ō|Ǒ]/gm, `O`);
    newData = newData.replace(/[Ù|Ú|Û|Ü|Ū|Ū|Ǚ]/gm, `U`);
    newData = newData.replace(/[­Ỳ|Ý|Ŷ|Ÿ]/gm, `Y`);

    newData = newData.replace(/[à|á|â|ä|ā|ǎ]/gm, `a`);
    newData = newData.replace(/[è|é|ê|ë|ē|ě]/gm, `e`);
    newData = newData.replace(/[ì|í|î|ï|ī|ǐ]/gm, `i`);
    newData = newData.replace(/[ò|ó|ô|ö|ō|ǒ]/gm, `o`);
    newData = newData.replace(/[ù|ú|û|ü|ū|ū|ǚ]/gm, `u`);
    newData = newData.replace(/[­ỳ|ý|ŷ|ÿ]/gm, `y`);

    return newData;
}

// 5. - https://nodejs.dev/learn/writing-files-with-nodejs
function writeToFile(whatFileName, whatContent) {
    fs.writeFile(whatFileName, whatContent, err => {
        if (err) {
          console.error(err)
          return
        }
        // file written successfully
    });
}

// 6. - main
function main() {
    const oldText = readFromFile("source.txt");
    const newText = replaceData(oldText);
    writeToFile("cible.txt", newText);
    console.log("remover.js is done...");
}

// 7. - launching the app
main();