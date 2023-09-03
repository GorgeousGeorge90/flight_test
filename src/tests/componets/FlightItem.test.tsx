import FlightItem, { FlightItemProps } from '../../modules/FlightsList/components/FlightItem/FlightItem';
import {render, screen} from '@testing-library/react';
import StateService from '../../utils/StateService';
import data from '../../data/data';


const state = StateService.createState(data)
const extra_state = StateService.createExtraState(state)

describe('', () => {
    it('render FlightItem component', () => {
            const data: FlightItemProps = {
                flight: extra_state[0],
                setActive: jest.fn(),
                setCurrent: jest.fn(),
            }
            const view = render(<FlightItem {...data}/>)
            expect(view).toMatchSnapshot()
    })
})
