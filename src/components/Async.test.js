import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Tests async component - fetch", () => {
    test("Tests whether posts are render correctly", async () => {

        render(<Async />)
        const listItemsPresent = await screen.findAllByRole("listitem")
        expect(listItemsPresent).not.toHaveLength(0)
    })
})