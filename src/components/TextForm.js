import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text has been copied!', 'success')
    }
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase!', 'success')
    }
    const handleClearText = () => {
        setText('');
        props.showAlert('Text Cleared!', 'success')
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase!', 'success')
    }
    const handlePaste = async () => {
        try {
            let newText = await navigator.clipboard.readText();
            setText(newText);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label "><h1 className="my-3">Textarea</h1></label>
                    <textarea className={`form-control border-5 bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`} id="mybox" rows="5" value={text} onChange={handleOnChange} placeholder='Enter text here'></textarea>
                </div>
                <button onClick={handleClearText} className="btn btn-primary ">Clear Text</button>
                <button onClick={handleUpperCase} className="btn btn-primary mx-3 ">UpperCase</button>
                <button onClick={handleLowerCase} className="btn btn-primary " >LowerCase</button>
                <button onClick={handleCopyText} className="btn btn-primary mx-3">Copy</button>
                <button onClick={handlePaste} className="btn btn-primary " >Paste</button>
                <div>
                    <h3 className="my-3">Summery:</h3>
                    <p>{text.split(/[".?"]/).length - 1} Sentences {text.split(/\s+/).filter(word => word !== '').length} words and {text.trim().length} characters</p>
                </div>
            </div>
        </div>
    )
}
