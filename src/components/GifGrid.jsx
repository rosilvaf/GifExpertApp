import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGIfs";
import propTypes from 'prop-types';


 
export default function GifGrid({category}) {
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
        <h3>
            {category}
        </h3>
        {
            isLoading && ( <h2>  Loading...   </h2>)
    
        }
        <div className="card-grid">
            {
                images.map(({image}) => (
                   <GifItem key={image.id}
                   {...image}
                   />
                ))
            }
        </div>
        </>
    )
}


GifGrid.prototype = {
    category: propTypes.string.isRequired,   
}