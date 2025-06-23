// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
     const [mode,setMode] = useState('light'); //Whether dark mode enabled or not
          const [alart,setAlert] = useState(null);
          const showAlert =(message,type) =>{
              setAlert({
                msg: message,
                type:type
              });
              setTimeout(()=>{
                  setAlert(null);
              },3000);
          }
          const toggleMode =(props)=>{
            if(mode==='light'){
              setMode('dark');
              document.body.style.backgroundColor = '#042743';
              showAlert("Dark mode has been enable","success");
              // document.title = 'TextUtils-Dark Mode';
              }
              else{
                setMode('light');
              document.body.style.backgroundColor = 'light';
              showAlert("light mode has been enable","success");
              // document.title = 'TextUtils-light Mode';
  
              }
            };
    

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("converted to upparcase","Success");
        
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("converted to lowercase","Success");
    }

    const handleClearClick =()=>{
      let newText='';
      setText(newText);
        props.showAlert("clear the text area","Success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
        
    }
    
    const handleOnCick = (event)=>{
        // console.log("On change");
        setText(event.target.value);
        
    }

    const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Remove the extra space textarea","Success");
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the above textarea","Success");

    }
    

    const [text, setText] = useState('Enter text here2');
    // text = "new text";//Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    

  return (
    <>
    <div className='container' style={{background:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnCick} style={{background:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear data</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Extra Space Remove</button>

    </div>
    <div className='container my-3' style={{background:props.mode==='dark'?'gray':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length}characters</p>
      <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length}Minutes read</p>
      <h3>Preview</h3>
      <strong>{text .length>0?text:"Nothing to preview!"}</strong>
      
    </div>
    </>
  )
}
