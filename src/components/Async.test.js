import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Tests async component - fetch", () => {
    test("Tests whether posts are render correctly", async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: "p1", title: "first post"}]
        })
        render(<Async />)
        const listItemsPresent = await screen.findAllByRole("listitem")
        expect(listItemsPresent).not.toHaveLength(0)
    })
    
})