import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';
import {useFetchGIfs, useFetchGifs} from '../../src/hooks/useFetchGIfs';

jest.mock('../../src/hooks/useFetchGIfs')

describe('Testing in <GifGrid />', () =>{
    const category = 'hi';

    test('it sould show the loading initially', ()=>{
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render( <GifGrid  category = {category}/>);
        expect(screen.getAllByText('Loading...'));
        expect(screen.getAllByText(category));
    })
    
    test('it should show items when it loads the images useFetchGifts',()=>{
        const gifs = [
            {
                id:'1',
                title: 'hi',
                url: 'https://localhost/hi.jpg'
            },
            {
                id:'2',
                title: 'hello',
                url: 'https://localhost/hello.jpg'
            },
            {
                id:'3',
                title: 'goal',
                url: 'https://localhost/goal.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid  category = {category}/>);
        expect(screen.getAllByRole('img').length).toBe(2)

    })
})