import { render, screen} from '@testing-library/react'
import BookingForm from '../BookingForm'

import { initializeTimes, updateTimes } from '../ReserveTable';
const timesToTest = 
[
    "7:00PM",
    "7:30PM",
    "8:00PM",
    "8:30PM",
    "9:00PM",
    "9:30PM",
    "10:00PM"
]


describe('Little Lemon restaurant tests', ()=>{

    test('Renders the BookingForm heading', ()=>{
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now!");
        expect(headingElement).toBeInTheDocument;
    })
    
    test('Check if the initializeTimes function returns the same array', ()=>{
        const availableTimesArray = initializeTimes()
        expect(availableTimesArray).toMatchObject(timesToTest)
    })

    test('Check if the updateTimes function will return the same state', ()=>{
        const timeArray = updateTimes()
        expect(timeArray).toMatchObject(timesToTest)
    })

})


