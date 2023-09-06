import { useState } from "react"
import "./ReserveTable.css"

import ReserveTableStep from "./ReserveTableStep"
import {BsCheckCircle} from 'react-icons/bs'
import { Link } from "react-router-dom"


import CTAButton from "../../CTAButton/CTAButton"
const ReserveTable = () =>{

    const [curStep, setCurStep] = useState(1)
    
    const submitHandler = (e, step) =>{
        e.preventDefault()
        setCurStep(step)
    }
    
    return (
    <section className="reserve-container">
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
        :<>
            <section className="booking-confirmation">
                <p>Your table has been successfully booked</p>
                <BsCheckCircle size={64}/>
                <p>You should be receiving an email confirmation shortly</p>
                <Link to={'/'} className='link'><b>back to home screen</b></Link>
            </section>
        </>
        }
        
        
        
    </section>
    )
}

export default ReserveTable