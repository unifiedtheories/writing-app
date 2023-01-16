import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {Link} from "react-router-dom";
import "./WordCounter.css"



const WordCounter = () => {
    const [text, setText] = useState('');
    const [countedWords, setWords] = useState('');
    const [allWords, setAll] = useState([]);

    const showFile = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            const texts = e.target.result;

            setText(texts);
            console.log(texts);
            countWords(texts);
            
        };

        reader.readAsText(e.target.files[0]);

    }



    function countWords(str) {
        
        var counts = {};
        if (str.length === 0) {
            return ('');
        }

        var words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, '').toLowerCase().split(/\W/);
        console.log(words);
        setWords(words);

        words = words.sort().filter(x => isNaN(x));

        for (var i = 0; i<words.length; i++) {
            var word = words[i];
            if (counts[word] === undefined) {
                counts[word] = 1; 
                
            } else {
                counts[word] ++;
            }
        }
        
        setAll(Object.entries(counts).join("\n"));
        console.log(allWords)
    }

    

    return (
        <div className="WordCounter">
            <h1>Word Counter</h1>
            <div><input type="file" onChange={showFile} /></div>
            <div>
                <input type="text" className="openTextBox" value={text} />
                <p>Word Count: {countedWords.length}</p>
                <p>{allWords}</p>
            </div>
            
        </div>

     
        
    )
  }

  export default WordCounter;