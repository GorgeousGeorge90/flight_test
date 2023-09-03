import FlightItemEx from '../../modules/FlightsList/components/FlightItemEx/FlightItemEx';
import { render,screen } from '@testing-library/react';

describe('FlightItemEx', ()=> {
    it('goal:render FlightItemEx component',()=> {
        const payload = {
            id:1,
            index:1,
        }

        const view = render(<FlightItemEx {...payload}/>)
        expect(view).toMatchSnapshot()
    })
})