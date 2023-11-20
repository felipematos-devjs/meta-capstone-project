import { render, screen} from '@testing-library/react'
import BookingForm from '../BookingForm'

import {updateTimes } from '../ReserveTable.jsx';
import initializeTimes from '../functions/initializeTimes';

//mocking the updateTimes function
const availableTimesByDate = {
    '1': ['10:00', '11:00', '12:00']
  };

describe('Little Lemon restaurant tests', ()=>{

    test('Renders the BookingForm heading', ()=>{
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now!");
        expect(headingElement).toBeInTheDocument;
    })
    
    test('Check if the initializeTimes function returns an non empty array', async ()=>{
        const mock = jest.fn((a)=>console.log(a))
        const returnValue = await initializeTimes(mock)
        expect(returnValue).toBeInstanceOf(Array)
        expect(returnValue).not.toHaveLength(0)
    })

    test('Check if the updateTimes function will return the same state', ()=>{
        const timeArray = updateTimes(null, {value: ['10:00', '11:00', '12:00']})
        expect(timeArray).toMatchObject(availableTimesByDate['1'])
    })

})


