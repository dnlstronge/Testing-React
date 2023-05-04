import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("checks text is present", () => {
    // arrange
    render(<Greeting/>)
    // act
    // ...

    // assert
   screen.getByText("Hello world");
})