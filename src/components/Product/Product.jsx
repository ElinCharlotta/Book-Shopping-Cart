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
        <section className='product-book'>
        <article className='border'></article>
        <div className='book-text'>
                <h2 className='book-title'>{props.title}</h2>
                <h3 className='book-author'>{props.author}</h3>
      
                </div>
            </section>
     </article>
        </div>
    )
}

export default Product;