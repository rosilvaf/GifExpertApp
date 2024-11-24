import {getGifs} from '../../src/components/helpers/getGifs'

describe('test in getGifts()', ()=>{

    test('it should return an array of gifts', async()=>{
        const gifs = await getGifs('hi');
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any( String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})