function revealWords(words, text) {
    let wordsArray = words.split(", "); 

    for (let word of wordsArray) {
        let template = "*".repeat(word.length);
        text = text.replace(template, word);
    }

    console.log(text);
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);