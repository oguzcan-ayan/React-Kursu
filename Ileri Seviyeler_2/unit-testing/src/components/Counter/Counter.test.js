import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

/* it('increase btn', () => {
    render(<Counter />);
}); */
describe("Counter tests", () => {

    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        console.log("I will work before every test");
        render(<Counter />);
         increaseBtn = screen.getByText("Increase");
         decreaseBtn = screen.getByText("Decrease");
         count = screen.getByText("0");
    })

    beforeAll(() =>{
        console.log("I will work at first");
    })

    afterEach(() => {
        console.log("I will work after every test");
    })

    afterAll(() => {
        console.log("I will work at the end of the test");
    })

    test('increase btn', () => {
       /*  render(<Counter />); */
    
       /*  const count = screen.getByText("0"); */
       /*  const increaseBtn = screen.getByText("Increase"); */

        userEvent.click(increaseBtn);
        expect(count).toBeInTheDocument("1");
       
    });
    
    test('decrease btn', () => {
        /* render(<Counter />); */
    
        /* const count = screen.getByText("0"); */
        /* const decreaseBtn = screen.getByText("Decrease"); */   

        userEvent.click(decreaseBtn);
        expect(count).toBeInTheDocument("-1");
    });
    
});




/* test('increase btn', () => {
     render(<Counter />);
 
     const count = screen.getByText("0");
     const increaseBtn = screen.getByText("Increase");

     userEvent.click(increaseBtn);
     expect(count).toHaveTextContent("1");
    
 });
 
 test('decrease btn', () => {
     render(<Counter />);
 
     const count = screen.getByText("0");
     const decreaseBtn = screen.getByText("Decrease");
 
     userEvent.click(decreaseBtn);
     expect(count).toHaveTextContent("-1");
 });
 */






