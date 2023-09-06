import { useState } from "react"
import "./ReserveTable.css"

import ReserveTableStep from "./ReserveTableStep"




import CTAButton from "../../CTAButton/CTAButton"
const ReserveTable = () =>{

    const [curStep, setCurStep] = useState(1)
    
    const submitHandler = (e, step) =>{
        e.preventDefault()
        setCurStep(step)
    }
    
    return (
    <section className="reserve-container">
        <h2 className="title">Reserve a table!</h2>
        {
        curStep < 4?
            <ReserveTableStep 
            step={curStep} 
            nextStep = {
                    (e) => submitHandler(e, curStep+1)
            }
            previousStep = {
                curStep > 1?
                    (e) => submitHandler(e, curStep-1)
                    :undefined
            }
        />
        :<>Confirmation Screen</>
    
    
        }
        
        
        
    </section>
    )
}

export default ReserveTable