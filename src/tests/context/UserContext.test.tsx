import {UserContext, UserType, useUserContext} from '../../context/user/UserWrapper';
import {render, screen} from '@testing-library/react';





describe('UserContext', () => {
    it('goal:get name from context',()=> {
        const TestComponent = () => {
            const test = useUserContext()


            return (<>
                    <p data-testid='value'>{test?.user.name}</p>
            </>)
        }

        const user:UserType = {
            name:'Egor',
            avatar:'',
        }

        const loginUser =  jest.fn()
        const logoutUser =  jest.fn()
        const changeAvatar =  jest.fn()


        render(<UserContext.Provider value={{
                user,
                loginUser,
                logoutUser,
                changeAvatar,
            }}>
                    <TestComponent/>
               </UserContext.Provider>
        )

        expect(screen.getByTestId('value').textContent).toBe('Egor')
    })
})
