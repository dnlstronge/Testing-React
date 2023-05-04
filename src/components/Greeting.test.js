import { queryByAttribute, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Checks greeting component", () => {
    test("checks text is present", () => {
        // arrange
        render(<Greeting/>)
        // act
        // ...
    
        // assert
       const helloWorldElement = screen.getByText("Hello world", {exact: false});
       expect(helloWorldElement).toBeInTheDocument()
    })
    
    test("checks paragraph on state false", () => {
        render(<Greeting />)
        const paraElement = screen.getByText("good to see you")
        expect(paraElement).toBeInTheDocument()
    })

    test("checks paragraph on state true", () => {
        render(<Greeting />)
        // act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)
        // assert
        const paraElement = screen.getByText("The text has changed")
        expect(paraElement).toBeInTheDocument()

    })
    test("checks para not present on state true", () => {
        render(<Greeting/>)
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        const paraElement = screen.queryByText("good to see you")
        expect(paraElement).toBeNull()
    })
    test("as above but use different selector", () => {
        render(<Greeting />)
        const buttonElement = screen.getByText("Change Text")
        userEvent.click(buttonElement)
        const paraElement = screen.queryByText("good to see you")
        expect(paraElement).toBeNull()
    })
   
   


})




/*

use get: if the element is in the document
use query: if checking not or element might note be in the document
use find: to return a promise


*/