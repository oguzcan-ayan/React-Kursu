import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

describe("Todo tests", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);

        button = screen.getByText("Add");
        input = screen.getByPlaceholderText("write whatever you want to do");
    });

    test("The default items we give before should be render", () =>{
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);

    });

    test("Input and button should be in the document", () =>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("we enter to the input and click to the Add button and then add to the list", () => {

        //filled the input
        const name = "Oğuzcan";
        userEvent.type(input, name);

        //click the button
        userEvent.click(button);

        //assertion
        expect(name).toEqual("Oğuzcan");

    });

});

