import React ,{useState} from 'react'


export default function TextFrom(props) {
  const [text,setText]=useState('Enter your text........');
    const convertUP=()=>{
      if(text.length===0){
        props.showAleart("please write some text","warning");
        return;
      }
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAleart("convert Upper case","success");
    }
    const convertLO=()=>{
      if(text.length===0){
        props.showAleart("please write some text","warning");
        return;
      }
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAleart("convert Lower case","success");
    }
    const Capitalized=()=>{
      if(text.length===0){
        props.showAleart("please write some text","warning");
        return;
      }
      let arr=text.split(' ');
      try{
        for(let i=0; i<arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
         
        }
        let newtext=arr.join(' ');
        setText(newtext);
        props.showAleart("convert Capitalized","success");

       
      }
      catch(err){
        // newtext=err.message;
        props.showAleart(err,"warning");
      
      }
      
     
    }
    const clear=()=>{
      if(text.length===0){
        props.showAleart("please write some text","warning");
        return;
      }
        let newtext='';
        setText(newtext);
        props.showAleart("clear done","success");
    }
    const copyText=()=>{
      let text=document.getElementById('exampleFormControlTextarea1');

      if(text.value.length===0){
        props.showAleart("please write some text","warning");
        return;
      }
      // console.log(text.value.length);
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAleart("text copyed","success");
    }
    const handleonchage=(event)=>{
        setText(event.target.value);
    }
    const countword=()=>{
      let count=0;
      let split=text.split(" ");
      // console.log(split);
      for(let i=0; i<split.length; i++){
        if(split[i]!==""){
          count+=1;
      }
    }
    return count;
  }
  return (
    <>
      
  
<div className={`contanier  text-${props.mode==='light'?'dark':'light'}`}>
    <h1>{props.heading}</h1>
  <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'white':'black'}` } id="exampleFormControlTextarea1" value={text} onChange={handleonchage} rows="10"></textarea>
<button className="btn btn-primary my-2 mx-2" onClick={convertUP}>Convert Uper Case</button>
<button className="btn btn-primary my-2 mx-2" onClick={convertLO}>Convert Lower Case</button>
<button className="btn btn-primary my-2 mx-2" onClick={Capitalized}>Capitalized text</button>
<button className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy text</button>
<button className="btn btn-primary my-2 mx-2" onClick={clear}>Clear text</button>
</div>
<div className={`contanier text-${props.mode==='light'?'dark':'light'}`}>
  <h1 className='my-3'>Word and Charecter in your text</h1>
  <p>{countword()} Word and {text.length} Charecter</p>
  <p>{(0.067*countword()).toFixed(2)} Minutes taken for read your text.</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Write something above text box."}</p>
</div>

</>
   
  )
}

// Switches
/*
Switches
A switch has the markup of a custom checkbox but uses the .form-switch class to render a toggle switch. Consider using role="switch" to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the disabled attribute.
A switch has the markup of a custom checkbox but uses the .form-switch class to render a toggle switch. Consider using role="switch" to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the disabled attribute.
 */