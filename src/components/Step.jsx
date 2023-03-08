import React, { useContext } from 'react'
import "./step.css";
import { cardnum ,cardnumFunc} from '../App';
function Step(props) {
  const card=useContext(cardnum);
  const setcard=useContext(cardnumFunc);
  const active=document.querySelectorAll(".stepno");
  //
  // active.forEach(step=>console.log(step));
  
  
  // active[0].classList.add("hi")
  return (
    <div className='step'  onClick={()=>{setcard(props.stepno);
    console.log(card)}} >
    
        <p className={`stepno ${card==props.stepno?"active":""}` }>{props.stepno}</p>
        
        <div className="stepdetail">
            
            <p className="step_no">STEP {props.stepno}</p>
            
            <p className="step__title">{props.steptitle}</p>
        </div>
    </div>
  )
}

export default Step