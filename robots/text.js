const algorithmia = require('algorithmia')
const algorithmiaKey = require('../credentials/algorithmia.json')

function robot(content){
    fetchContentFromWikipedia(content)

    function fetchContentFromWikipedia(content){
        const algorithmiaAutenticated = algorithmia(algorithmiaKey);
        algorithmia.client(algorithmiaKey)
        .algo("web/WikipediaParser/0.1.2?timeout=300") // timeout is optional
        .pipe("willians")
        .then(function(response) {
            console.log(response.get());
        });
    }
}

module.exports = robot

robot(123)