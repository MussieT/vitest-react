import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// We will do some behavior driven test..
import App from './App'

afterEach(cleanup)

const setup = () => {
    const utils = render(<App />)

    const usernameInput = utils.getByLabelText('username-input')
    const passwordInput = utils.getByLabelText('password-input')

    return {
        usernameInput,
        passwordInput
    }
}

describe("App.jsx Test", () => {
   it("Tests Login", async () => {
       const { usernameInput, passwordInput } = setup()

       // Insert username and password
       fireEvent.change(usernameInput, { target: { value: 'Mussie'}})
       fireEvent.change(passwordInput, { target: { value: 'password'}})
    
       // Click the button
       await userEvent.click(screen.getByRole('button'))

       // Expect the button o be submitted
       expect(screen.getByRole('button').innerHTML).toBe('Submitted')
    })

   it("Returns Alert When Username and Password Is Not Provided", async () => {

       const jsDomAlert = window.alert;

       window.alert = () => {};

       render(<App />)

       userEvent.click(screen.getByRole('button'))

       window.alert = jsDomAlert
   })
})
