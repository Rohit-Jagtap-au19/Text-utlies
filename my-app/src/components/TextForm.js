import React, { useState } from 'react'


export default function TextForm(props) {
        const handelUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted To UpperCase !","success ")
    }
    // this is for lowercase
    const handellcClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted To Lowercase !","success ")

    }
// this is for clear
    const handelclearClick = () => {
        let newtext = ''
        setText(newtext)
        props.showAlert("Text Removed!","success ")
    }
// this is for on click
    const handelonChange = (event) => {
        setText(event.target.value)
    }
// this is for copy
    const handelcopy = () =>{
        // let text = document.getElementById("mybox");
        // text.select();
        // navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied!","success ")

    }
// this is for remove extra spaces
    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces !","success ")
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color :props.mode==='dark'?'white':'#042743'}} >
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handelonChange} style={{backgroundColor :props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handellcClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handelclearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handelcopy}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={removeExtraSpaces}>Remove spaces</button>
            </div>

            <div className="container my-2" style={{color :props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing To Preview !"}</p>
            </div>
        </>
    )
}
