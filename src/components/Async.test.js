import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Tests async component - fetch", () => {
    test("Tests whether posts are rendere correctly", () => {

        render(<Async />)
    })
})