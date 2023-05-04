import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("checks text is present", () => {
    // arrange
    render(<Greeting/>)
    // act
    // ...

    // assert
   const helloWorldElement = screen.getByText("Hello world");
   expect(helloWorldElement).toBeInTheDocument()
})