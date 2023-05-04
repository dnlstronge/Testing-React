import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe("Checks greeting component", () => {
    test("checks text is present", () => {
        // arrange
        render(<Greeting/>)
        // act
        // ...
    
        // assert
       const helloWorldElement = screen.getByText("Hello world");
       expect(helloWorldElement).toBeInTheDocument()
    })


})




/*

use get: if the element is in the document
use query: if checking not or element might note be in the document
use find: to return a promise


*/