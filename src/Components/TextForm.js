import React, { useState } from 'react'

export default function TextForm(props) {

    let conUpChange = (event) => {
        setText(event.target.value);
    }

    let conUpText = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted To UpperCase', 'success');
    }

    let conLoText = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Converted To LowerCase', 'success');
    }

    let clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert('TEXT AREA CLEARED', 'success');
    }

    let copyText = () => {
        document.getElementById('exampleFormControlTextarea1').select();
        document.execCommand('copy');
        // text.select();
        // navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();


        props.showAlert('TEXT COPIED TO CLIPBOARD', 'success');
    }

    let locaText = () => {
        const t = document.getElementById('exampleFormControlTextarea1');
        var word = prompt("Enter the word you want to find:");
        var check = t.value;
        var index = check.indexOf(word);
        if (index !== -1) {
            alert("The word '" + word + "' is found at index " + index);
        } else {
            alert("The word '" + word + "' is not found in the text.");
        }
    }

    let summary = () => {

        alert('NO. OF CHARACTER -' + text.length + '\nNO. OF WORDS -' + text.split(" ").filter((element) => { return element.length !== 0 }).length + '\nMINUTES READ - ' + 0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length);

    }

    let empText = () => {

        const t = document.getElementById('exampleFormControlTextarea1');
        var word = t.value;
        var newText = word.replace(/\s/g, '');
        setText(newText);

    }


    let freText = () => {

        var textarea = document.getElementById("exampleFormControlTextarea1");

        var word = prompt("Enter the word to search for:");

        var words = textarea.value.split(" ");

        var frequency = 0;

        for (var i = 0; i < words.length; i++) {

            if (words[i] === word) {

                frequency++;
            }
        }

        alert("The word '" + word + "' appears " + frequency + " times in the textarea.");

    }

    let speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const myswitch = document.getElementById('toggle')
        if (myswitch.textContent === "RECITE") {
            props.showAlert('Text Is Being Recited', 'success');
            myswitch.innerHTML = "STOP"
        }
        else {
            myswitch.innerHTML = "RECITE"
            if (myswitch.innerHTML === "RECITE") {
                window.speechSynthesis.cancel()
            }
        }
        msg.onend = () => {
            myswitch.textContent = "RECITE"
        }
    }

    let dwMode = () => {
        let set = document.getElementById('mode');
        if (set.textContent === 'ENABLE DARK MODE') {
            set.innerHTML = 'ENABLE LIGHT MODE'
            setMyStyle({
                color: 'white',
                backgroundColor: '#28282B'
            })
        }
        else {
            set.innerHTML = 'ENABLE DARK MODE'
            setMyStyle({
                color: '#28282B',
                backgroundColor: 'white'
            })
        }
    }

    const [myStyle, setMyStyle] = useState({
        color: '#28282B',
        backgroundColor: 'white'
    });

    const [text, setText] = useState('Enter Text Here');

    return (
        <>
            <div className='container' style={{ color: props.pmode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={myStyle} onChange={conUpChange} value={text} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={dwMode} id='mode'>ENABLE DARK MODE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={conUpText}>UPPERCASE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={conLoText}>LOWERCASE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={summary}>SUMMARY</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={speak} id='toggle'>RECITE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={empText}>CONDENSE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={locaText}>LOCATE</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={freText}>FREQUENCY</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={copyText}>COPY TEXT</button>
                <button className={`btn btn-${props.bcolor} mx-2 my-2`} onClick={clearText}>CLEAR TEXT</button>
            </div>
        </>
    )
}
