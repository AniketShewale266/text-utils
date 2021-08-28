import React, { useState } from 'react'

export default function TextForm(props) {
    const handleonchanged = (event) => {
        // console.log("On Changed");
        setText(event.target.value);
    }

    const handleUpclick = () => {
        // console.log("Uppercase was Click"  + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLcclick = () => {
        // console.log("Lowercase was Click"  + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleclearclick = () => {
        // console.log("Lowercase was Click"  + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text clear","success");
    }
    const handlecapitalizedclick = () => {
        // console.log("Lowercase was Click"  + text);
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText)
        props.showAlert("Converted to capitalizecase","success");
        
    }
    const handleextractclick = () => {

     
        function extractEmails(text)
        {
            let val = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
            if(val){
                props.showAlert("Mail has been extracted","success");
                setText(val.join('\n'));
            }
            else{
               
            }
        }
        extractEmails(text);
       
        
        // function extractEmails(text)
        // {
        //     let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        //     setText(newText.join('\n'));
        // }
        // // let newText = extractEmails(text);
        // // setText(newText.join('\n'));
        // extractEmails(text);
        // props.showAlert("Mail has been extracted","success");



        }
        const handlecopytextclick = () => {
            const text = document.getElementById('myBox');
            text.select();
            text.setSelectionRange(0,9999);
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard","success");
            
        }

        // const wordcount = (text)=>{
        //     return text.split(" ").length
        // }
        function count_words(text)
        {
           text = text.replace(/(^\s*)|(\s*$)/gi,"");
           text = text.replace(/[ ]{2,}/gi," ");
           text = text.replace(/\n /,"\n");
           return text.split(' ').length;
        }
       

    const [text, setText] = useState("");

    // setText("Aniket is great"); // Correct way to change the state

    // console.log(useState("Enter text here2"));
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleonchanged} id="myBox" rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLcclick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handlecapitalizedclick} >Capitalized case</button>
                <button className="btn btn-primary mx-2" onClick={handleextractclick} >Extract Email</button>
                <button className="btn btn-primary mx-2" onClick={handlecopytextclick} >Copy Text</button>
            </div>

            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text Summary</h2>
                <b><p>{count_words(text)} words and {text.length} characters</p></b>
                <b><p>{0.008 * text.split(" ").length} Minutes read</p></b>
                <b><h2>Preview</h2></b>
                {/* <b><p>{text}</p></b> */}
                <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>

    )
}


