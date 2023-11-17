import {BiSolidRightArrow, BiSolidLeftArrow, BiTime} from 'react-icons/bi'
import CTAButton from '../../CTAButton/CTAButton'
import images from '../../../assets/images/images'
import Table from './table'
import { useState, useEffect, useRef, useReducer} from 'react'

import {MdDateRange, MdOutlinePlace, MdPeopleOutline} from 'react-icons/md'
import {LiaGlassCheersSolid} from 'react-icons/lia'


import {BsCheckCircle} from 'react-icons/bs'
import { Link } from "react-router-dom"

const MAX_PLAN_WIDTH = 416;

const date = new Date()
//let dateFormat = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
let dateFormat = date.getFullYear() + "-" +  (date.getMonth() + 1) + "-" + date.getDate(); 

//values for booking reducer
const bookingInitialValues = {
    date: dateFormat,
    time: "7:00PM",
    guests: 1,
    occasion: "none",
    table: 0,
    description: ""
}

const bookingReducer = (state, action) =>{
    const newBookingParams = {...state}
    //console.log(newBookingParams)

    switch (action.type) {
        case "changeDate":
            newBookingParams.date = action.value
            return {...newBookingParams}
            break;
    
        case "changeTime":
            newBookingParams.time = action.value
            return {...newBookingParams}
            break;

        case "changeGuests":
            newBookingParams.guests = action.value
            return {...newBookingParams}
            break;

        case "changeOccasion":
            newBookingParams.occasion = action.value
            return {...newBookingParams}
            break;

        case "changeTable":
            newBookingParams.table = action.value
            newBookingParams.description = action.description
            return {...newBookingParams}
            break;

        default:
            break;
    }
}

const AvailableTimes = ({times}) =>{
    return (
        <>
        {times && times.length > 0 &&
            times.map((el, id)=>{
                return <option key={id} value={el}>{el}</option>
            })
        }
        </>
    )
}

const ChooseOptions = ({step, nextStep, bookingParams, dispatchBookingParams, availableTimes, dispatchAvailableTimes}) =>{
    
    return (
        <> 
            <form className="reserve-form" action="">
                <div className='row'>
                    <h3>How's your reservation?</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                <article className='form-box'>
                    <div className="input-group" role="group">
                        <label htmlFor="date">1. Choose the day of your reservation</label>
                        <input 
                        type="date" 
                        name="date" 
                        id="date" 
                        value={bookingParams.date}
                        onChange={(e) => {

                                dispatchAvailableTimes({availableTimes: e, type: 'update'})
                                dispatchBookingParams({type: "changeDate", value: e.target.value})      
                            }}
                        />       
                    </div>
                    <div className="input-group" role="group">
                        <label htmlFor="time">2. Select the time of your reservation</label>
                        <select 
                        name="" 
                        id="time"
                        value={bookingParams.time}
                        onChange={(e) => dispatchBookingParams({type: "changeTime", value: e.target.value})}
                        >
                            <AvailableTimes times={availableTimes}/>
                        </select>
                        <small>PS.: The restaurant closes at 11:00 PM</small>
                    </div>
                    <div className="input-group" role="group">
                        <label htmlFor="guests">3. How many people will be eating?</label>
                        <input type="number" name="" id="guests" min="1" max="4" placeholder="1"
                        value={bookingParams.guests}
                        onChange={(e) => dispatchBookingParams({type: "changeGuests", value: e.target.value})}
                        />
                    </div>
                    <div className="input-group"  role="group">
                        <label htmlFor="occasion">4. Is there a special occasion?</label>
                        <select 
                        name="" 
                        id="occasion"
                        value={bookingParams.occasion}
                        onChange={(e) => dispatchBookingParams({type: "changeOccasion", value: e.target.value})}
                        >
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    
                </article>
            </form>

            <div className="submit-container-right">
                <CTAButton onClick={nextStep}>
                    <p>Next Step</p>
                    <BiSolidRightArrow />
                </CTAButton>
            </div>
        </>
    )
}

const tableList = [
    {x: 2, y:1, available: true, variant: "two_table_square", description: "indoors, by the window."},
    {x: 20, y:1, available: false, variant: "two_table_square", description: "indoors, by the window."},
    {x: 37, y:1, available: true, variant: "two_table_square", description: "indoors, by the window."},
    {x: 53, y:1, available: true, variant: "two_table_square", description: "indoors, by the window."},
    
    {x: 10, y:16, available: true, variant: "four_table_square", description: "indoors, at the center."},
    {x: 28, y:16, available: false, variant: "four_table_square", description: "indoors, at the center."},
    {x: 46, y:16, available: true, variant: "four_table_square", description: "indoors, at the center."},
    
    {x: 35, y:45, available: true, variant: "four_table_round", description: "indoors, at the center."},
    {x: 60, y:45, available: true, variant: "four_table_round", description: "indoors, at the center."},
    
    {x: 47, y:62, available: true, variant: "four_table_round", description: "indoors, by the window."},
    {x: 72, y:62, available: false, variant: "four_table_round", description: "indoors, by the window."},
    
    {x: 38, y:82, available: false, variant: "four_table_round", description: "outdoors."},
    {x: 59, y:82, available: false, variant: "four_table_round", description: "outdoors."},
    {x: 80, y:82, available: true, variant: "four_table_round", description: "outdoors"},
]

const ChooseTable = ({step, nextStep, previousStep, dispatchBookingParams}) =>{
    
    const bgRef = useRef()

    const [dimensions, setDimensions] = useState({width: window.innerHeight, height: window.innerHeight})
    const [curTable, setCurTable] = useState({table: undefined, available: false})

      useEffect(() => {

        
        function handleResize() {
            setDimensions({width: bgRef.current.scrollWidth, height: bgRef.current.scrollHeight})
        }
    
        handleResize()
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])
    
      useEffect(()=>{
        if (bgRef)
        {
            const timer = setTimeout(()=>{
                setDimensions({width: bgRef.current.scrollWidth, height: bgRef.current.scrollHeight})
            }, 10)
        
        return () => clearTimeout(timer);
        }
      }, [bgRef])

    const handleTableClick = (number, available, description = "") =>{
        setCurTable({table: number, available: available})
        if (available)
        {
            dispatchBookingParams({type: "changeTable", value: number, description: description})
        }
    }



    return (
        <>
            <form className="reserve-form" action="">
                <div className='row'>
                    <h3>Choose Your table!</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                    <article className='restaurant-form-box' role="group">
                        <div className='restaurant-plan' style={{background: `url(${images.restaurantPlan}) no-repeat `, backgroundSize: 'contain', height: `${dimensions.width}px`}} ref={bgRef} role="radiogroup">
                            
                            {tableList.map((el, id)=>{
                                return <Table {...el} number={id+1} key={id} scale={dimensions.width/MAX_PLAN_WIDTH} handleTableClick = {handleTableClick} chosen = {id + 1 == curTable.table}/>
                            })}
                        </div>
                </article>
            </form>
            {curTable.table != undefined 
            && (curTable.available? 
                <><p>Table No {curTable.table} is available! </p> <p> You may proceed with your reservation!</p></>
            : <><p>Table No {curTable.table} is unavailable at this date!</p> <p>Please, choose another table</p></>
            )
            
            }
            <div className="submit-container">
                <CTAButton onClick={previousStep} >
                    <BiSolidLeftArrow />
                    <p>Previous Step</p>
                </CTAButton>
                
                <CTAButton onClick={nextStep} disabled = {!curTable.available}>
                    <p>Next Step</p>
                    <BiSolidRightArrow />
                </CTAButton>
            </div>
        </>
    )
}

const BookingSummary = ({step, nextStep, previousStep, bookingParams}) =>{
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(bookingParams.date).toLocaleDateString('en-US', dateOptions)
    
    return (
        <>  
            <article className="reserve-confirmation" action="">
                <div className='row'>
                    <h3>Reservation Summary</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                <ul className='summary-list'>
                    <li className='summary-item'><MdDateRange /> <b>Date</b>: {date} </li>
                    <li className='summary-item'><BiTime /><b>Time:</b> {bookingParams.time}</li>
                    <li className='summary-item'><MdOutlinePlace /><b>Table:</b> number {bookingParams.table} - {bookingParams.description}</li>
                    <li className='summary-item'><MdPeopleOutline /><b>Number of people:</b> {bookingParams.guests}</li> 
                    <li className='summary-item'><LiaGlassCheersSolid /><b>Occasion:</b> {bookingParams.occasion}</li> 
                </ul>
            </article>

            <p><b>Is everything correct?</b></p>
            <div className="submit-container">  
                <CTAButton onClick={previousStep}>
                    <BiSolidLeftArrow />
                    <p>No! take me back!</p>
                </CTAButton>
                
                <CTAButton onClick={nextStep}>
                    <p>Yes! Confirm Booking!</p>
                    <BiSolidRightArrow />
                </CTAButton>
            </div>
        </>
    )
}

const BookingConfirmation = ({step}) =>{
    return (
        <>
            <section className="booking-confirmation">
                <p>Your table has been successfully booked</p>
                <BsCheckCircle size={64}/>
                <p>You should be receiving an email confirmation shortly</p>
                <Link to={'/'} className='link'><b>back to home screen</b></Link>
            </section>
        </>
    )
}

const BookingForm = ({step, nextStep, previousStep, availableTimes, dispatchAvailableTimes}) =>{

    const [bookingParams, dispatchBookingParams] = useReducer(bookingReducer, bookingInitialValues)
    
    const childProps = {
        step, nextStep, previousStep, bookingParams, dispatchBookingParams, availableTimes, dispatchAvailableTimes
    }
    
    return (
       <>
            
            <article className="reserve-step">
                {step != 4 && <h2>Book Now!</h2>}
                {
                step == 1 
                    ? <ChooseOptions {...childProps}/>
                : step == 2
                    ? <ChooseTable {...childProps}/>
                : step == 3
                    ? <BookingSummary {...childProps}/>
                : step == 4
                    ? <BookingConfirmation {...childProps}/>:<></>
                }    
            </article>
       </>
    )
}

export default BookingForm