import propTypes from 'prop-types'

//To specify a CSS class, use the className attribute.
export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )

}
//PropTypes exporta un rango de validadores que pueden ser usados para estar seguros que la información recibida sea válida. 
GifItem.propTypes = {
  title:propTypes.string.isRequired,
  url: propTypes.string.isRequired
}
