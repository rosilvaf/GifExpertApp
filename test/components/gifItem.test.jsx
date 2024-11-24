import {render, screen} from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem'

describe('Test in <GifItem/>', () =>{
    const title = "hi";
    const url = "https://one-punch.com/hi.jpg";
    test('should do match with the snapshot', ()=>{
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('it should show image with url and alt adecuated', ()=>{
        render( <GifItem title={title} url={url}/>)
        // screen.debug();;
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('it should show the title in the component', ()=>{
        render( <GifItem title={title} url={url}/>)
       
        expect(screen.getByText(title)).toBeTruthy()
    })
})


