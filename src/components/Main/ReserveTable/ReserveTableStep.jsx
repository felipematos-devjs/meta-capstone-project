import {BiSolidRightArrow, BiSolidLeftArrow} from 'react-icons/bi'
import CTAButton from '../../CTAButton/CTAButton'
import images from '../../../assets/images/images'
import Table from './table'
import { useState, useEffect, useRef } from 'react'


const MAX_PLAN_WIDTH = 416;

const Step1Content = ({step, nextStep}) =>{
    return (
        <>
            <form className="reserve-form" action="">
                <div className='row'>
                    <h3>How's your reservation?</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                <article className='form-box'>
                    <div className="input-group">
                        <label htmlFor="">1. Choose the day of your reservation</label>
                        <input type="date" name="" id="" />       
                    </div>
                    <div className="input-group">
                        <label htmlFor="">2. Select the time of your reservation</label>
                        <select name="" id="">
                            <option value="">7:00 PM</option>
                            <option value="">7:30 PM</option>
                            <option value="">8:00 PM</option>
                            <option value="">8:30 PM</option>
                            <option value="">9:00 PM</option>
                            <option value="">9:30 PM</option>
                        </select>
                        <small>PS.: The restaurant closes at 11:00 PM</small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">3. How many people will be eating?</label>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">4. Is there a special occasion?</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">Birthday</option>
                            <option value="">Engagement</option>
                            <option value="">Anniversary</option>
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

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

const Step2Content = ({step, nextStep, previousStep}) =>{
    
    const bgRef = useRef()

    const [dimensions, setDimensions] = useState({width: window.innerHeight, height: window.innerHeight})


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
                console.log('here')
                setDimensions({width: bgRef.current.scrollWidth, height: bgRef.current.scrollHeight})
            }, 10)
        
        return () => clearTimeout(timer);
        }
      }, [bgRef])





    return (
        <>
            <form className="reserve-form" action="">
                <div className='row'>
                    <h3>Choose Your table!</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                    <article className='form-box'>
                        <div className='restaurant-plan' style={{background: `url(${images.restaurantPlan}) no-repeat `, backgroundSize: 'contain', height: `${dimensions.width}px`}} ref={bgRef}>
                            <Table x={2} y={1} available={true} variant={'two_table_square'} number={1} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={20} y={1} available={false} variant={'two_table_square'} number={2} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={37} y={1} available={true} variant={'two_table_square'} number={3} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={53} y={1} available={true} variant={'two_table_square'} number={4} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                        
                            <Table x={10} y={16} available={true} variant={'four_table_square'} number={5} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={28} y={16} available={false} variant={'four_table_square'} number={6} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={46} y={16} available={true} variant={'four_table_square'} number={7} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                        
                            <Table x={35} y={45} available={true} variant={'four_table_round'} number={8} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={60} y={45} available={true} variant={'four_table_round'} number={9} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                        
                            <Table x={47} y={62} available={true} variant={'four_table_round'} number={10} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={72} y={62} available={false} variant={'four_table_round'} number={11} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                        
                            <Table x={38} y={82} available={false} variant={'four_table_round'} number={12} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={59} y={82} available={false} variant={'four_table_round'} number={13} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                            <Table x={80} y={82} available={true} variant={'four_table_round'} number={14} scale={dimensions.width/MAX_PLAN_WIDTH}/>
                        </div>
                </article>
            </form>
            <div className="submit-container">
                <CTAButton onClick={previousStep}>
                    <BiSolidLeftArrow />
                    <p>Previous Step</p>
                </CTAButton>
                
                <CTAButton onClick={nextStep}>
                    <p>Next Step</p>
                    <BiSolidRightArrow />
                </CTAButton>
            </div>
        </>
    )
}

const Step3Content = ({step, nextStep, previousStep}) =>{
    return (
        <>
            <article className="reserve-confirmation" action="">
                <div className='row'>
                    <h3>Reservation Summary</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                <article className='form-box'>
                    <p>DAY: Friday, August 11, 2023</p>
                    <p>Time: 9:00 PM</p>
                    <p>Table: number 15, inside, by the window</p>
                    <p>Number of people: 4</p> 
                </article>
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


const Step4Content = ({step}) =>{
    return (
        <>
            <form className="reserve-form" action="">
                <div className='row'>
                    <h3>3 - Confirm your booking</h3>
                    <p className='step'>step {step}/3</p>
                </div>
                <div className="input-group">
                    <label htmlFor="">1. Choose the day of your reservation</label>
                    <input type="date" name="" id="" />       
                </div>
                <div className="input-group">
                    <label htmlFor="">2. Select the time of your reservation</label>
                    <select name="" id="">
                        <option value="">7:00 PM</option>
                        <option value="">7:30 PM</option>
                        <option value="">8:00 PM</option>
                        <option value="">8:30 PM</option>
                        <option value="">9:00 PM</option>
                        <option value="">9:30 PM</option>
                    </select>
                    <small>PS.: The restaurant closes at 11:00 PM</small>
                </div>
                <div className="input-group">
                    <label htmlFor="">3. How many people will be eating?</label>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="">4. Is there a special occasion?</label>
                    <select name="" id="">
                        <option value="">None</option>
                        <option value="">Birthday</option>
                        <option value="">Engagement</option>
                        <option value="">Anniversary</option>
                    </select>
                </div>
            </form>
        </>
    )
}




const ReserveTableStep = ({step, nextStep, previousStep}) =>{
    return (
        <article className="reserve-step">   
            {
            step == 1 
                ? <Step1Content step={step} nextStep={nextStep}/>
            : step == 2
                ? <Step2Content step={step} nextStep={nextStep} previousStep={previousStep}/>
            : step == 3
                ? <Step3Content step={step} nextStep={nextStep} previousStep={previousStep}/>
            : step == 4
                ? <Step4Content step={step}/>:<></>
            }    
        </article>
    )
}





export default ReserveTableStep