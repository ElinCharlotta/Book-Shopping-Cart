import { useNavigate } from 'react-router-dom'
import './Product.css'

function Product(props) {
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate(`/books/${props.title}`)

    }
    return (
        <div>
            <article onClick={navigateToProduct} className='product' style={{ 
    backgroundColor: props.color }}>
                <h2 className='book__title'>{props.title}</h2>
                <h3 className='book__author'>{props.author}</h3>
      
            </article>
     
        </div>
    )
}

export default Product;