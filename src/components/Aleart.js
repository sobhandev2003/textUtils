import React from 'react'

export default function Aleart(props) {
    const Capitalized=(word)=>{
        // let text=word.toLowerCase;
      
        
       let text= word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
         return text;
    }
  return (
   props.aleart&& <div className={`alert alert-${props.aleart.type}`} role="alert">
     <strong>{Capitalized(props.aleart.type)}:</strong>{props.aleart.msg}
     </div>
  )
}
