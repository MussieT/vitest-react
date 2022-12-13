import { screen, render, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Header from './Header'

afterEach(cleanup)

describe("Button Component", () => {
    test("renders add without props", () => {
        act(() => {
            render(<Header />);
        });

        expect(screen.getByText("Login from add task")).toBeInTheDocument()
    })

    test("renders with props", () => {
        act(() => {
            render(<Header title="hello world" />)
        })

        expect(screen.getByText("hello world")).toBeInTheDocument()
    })
})
