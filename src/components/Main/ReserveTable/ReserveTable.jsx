import { useState, useReducer} from "react"
import "./ReserveTable.css"
import BookingForm from "./BookingForm"
import { useEffect } from "react"

export const initializeTimes = ()=>{
    return [
        "7:00PM",
        "7:30PM",
        "8:00PM",
        "8:30PM",
        "9:00PM",
        "9:30PM",
        "10:00PM"
    ]
}


export const updateTimes = (state, action) =>{
    //get times from dates
    console.log(state)
    
    const newTimes = [...initializeTimes()]
    return newTimes
}

const ReserveTable = () =>{

    const [curStep, setCurStep] = useState(1)
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())
    
    const submitHandler = (e, step) =>{
        e.preventDefault()
        setCurStep(step)
    }
    
    useEffect(()=>{
        console.log(availableTimes)
    }, [availableTimes])



    return (
        <section className="reserve-container">
            {
                <BookingForm 
                step={curStep} 
                nextStep = {(e) => submitHandler(e, curStep+1)}
                previousStep = {
                    curStep > 1?
                        (e) => submitHandler(e, curStep-1)
                        :undefined
                }
    
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
            }  
        </section>
    )
}

export default ReserveTable