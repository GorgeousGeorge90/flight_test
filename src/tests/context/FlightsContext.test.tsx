import { render,screen } from '@testing-library/react';
import FlightsWrapper, { useFlightsContext } from '../../context/flights/FlightsWrapper';


const TestComponent = () => {
    const test = useFlightsContext()

    return (<>
            <p data-testid='value'>{test?.flights[0].carrier}</p>
        </>)
}


describe('FlightsContext', ()=> {
    it('goal:get carrier info from context',()=> {

        render(<FlightsWrapper>
            <TestComponent/>
        </FlightsWrapper>)

        expect(screen.getByTestId('value').textContent).toBe('Air France')
    })
})