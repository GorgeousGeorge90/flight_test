import FlightsList from '../../modules/FlightsList/FlightsList';
import { render, screen } from "@testing-library/react";




describe('FlightsList', ()=> {
        it('goal: render FlightsList component', () => {
            const data = {
                currentPage: 1,
                pagePortion: 3,
            }
            render(<FlightsList {...data}/>)

            const list = screen.getByRole('list')
            expect(list).toBeInTheDocument()
        })
    }
)