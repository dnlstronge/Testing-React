import { render } from "@testing-library/react"
import Greeting from "./Greeting"

test("checks component renders", () => {
    render(<Greeting/>)
})