import React from 'react'
import "./step.css";
function Step(props) {
  return (
    <div className='step'>
        <p className="stepno">{props.stepno}</p>
        <div className="stepdetail">
            <p className="step_no">STEP {props.stepno}</p>
            <p className="step__title">{props.steptitle}</p>
        </div>
    </div>
  )
}

export default Step