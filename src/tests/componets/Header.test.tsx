import Header from '../../components/Header/Header';
import { render } from '@testing-library/react';


describe('Header',()=> {
    it('goal:render Header component', ()=> {
        const view = render(<Header/>)
        expect(view).toMatchSnapshot()
    })
})


