import { fireEvent, screen, render } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory"

describe('Test in <AddCategory />', () =>{
    test('it should change the value of the text box', ()=>{
        render(<AddCategory onNewCategory={() =>{}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'hi'}})
        expect( input.value ).toBe('hi')
    })

    test('it should call onNewCategory if the input has a value',()=>{
        const inputValue = ' hi';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={() =>{}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}})
        fireEvent.submit( form );
        expect ( input.value ).toBe('');

    })

    test('it should not call the onNewCategory if the input is empty',()=>{
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={() =>{}}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})

