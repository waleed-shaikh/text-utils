//rfc
// The state is a built-in React object that is used to contain data or information about the component. 
// JSK FRAGMENT: A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleOnChange = (event)=>{
      setText(event.target.value)
  };
  const handleUpClick = ()=>{
      setText(text.toUpperCase())
      if(text.length>0){
        props.showAlert("Converted to Upper Case!", "success")
      }
    };
    const handleLowClick = ()=>{
      setText(text.toLocaleLowerCase())
      if(text.length>0){
        props.showAlert("Converted to Lower Case!", "success")
      }
  };
  const handleClearText = ()=>{
      setText('')
      props.showAlert("Text Cleared!", "warning")
  };


  const firstLetterUpper = text => {
    var newString = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,(c)=>{return c.toUpperCase()});
    return newString;
    
  }
  const convertToSentenceCase = ()=>{
      setText(firstLetterUpper(text))
      if(text.length>0){
        props.showAlert("Converted to Sentence Case!", "success")
      }
  };

  const handleTileCase = () => {
    let newText = text.split(" ").map((value) => {
        let newText = value[0].toUpperCase() + value.slice(1);
        return newText;
    })
    setText(newText.join(" "));
    if(text.length>0){
      props.showAlert("Converted to Tile Case!", "success")
    }
  }

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    if(text.length>0){  
      props.showAlert("Text Speaking!", "success")
    }
  }


  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' || props.ybgmode==="rgb(78, 78, 0)" || props.gbgmode==="rgb(19, 53, 0)" || props.bbgmode==="rgb(1, 0, 53)"?'white':'black'}}> {/* d-grid gap-2 */}
        <h1 id={`formheading`}>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Example text area</label> */}
            <textarea lable="hello" className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="6"></textarea>
        </div>
        <button className="btn btn-secondary px-4 mx-1" onClick={handleUpClick}>Upper Case</button>
        <button className="btn btn-primary px-4 mx-1" onClick={handleLowClick}>Lower Case</button>
        <button className="btn btn-success px-4 m-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary px-4 m-1" onClick={convertToSentenceCase}>Sentence Case</button>
        <button className="btn btn-primary px-4 m-1" onClick={handleTileCase}>Tile Case</button>
        <button className="btn btn-primary px-4 m-1" onClick={handleSpeak}>Speak Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'|| props.ybgmode==="rgb(78, 78, 0)" || props.gbgmode==="rgb(19, 53, 0)" || props.bbgmode==="rgb(1, 0, 53)"?'white':'black'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").filter((elm) => { return elm !== "" }).length} words and {text.length} Characters</p>
      <p> {text.split(" ").filter((elm) => { return elm !== "" }).length * 0.008} Minutes to Read</p>
      <h3>Preview</h3>
      <p>{text===""?'Enter Something in the textbox above to preview it here':text}</p>
    </div>
    </>
  );
}
