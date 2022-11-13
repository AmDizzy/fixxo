import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react'
import ContactFormSection from '../sections/ContactFormSection'

describe(ContactFormSection, () => {

    it('Test to see if error shows up when clicking submit without filling out a name in the form', () => {
        render(<ContactFormSection />)
        const button = screen.getByTestId('submitForm')
        
        fireEvent.click(button)
        const toDoElement = screen.getByTestId('nameTest')
    
        expect(toDoElement).toHaveTextContent('A name is required')
    })
})