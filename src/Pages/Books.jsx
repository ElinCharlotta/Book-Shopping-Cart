import { useEffect, useState } from 'react'
import Product from '../components/Product/Product';
import '../Styles.css/Books.css';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        async function getBooks() {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
            const data = await response.json();

            console.log(data);

            setBooks(data);
        }

        getBooks();
    }, []);


    const bookComponents = books.map((book) =>
        <Product
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            color={book.color} />);




    return (
        <section>
            <h1>8 Classic Childrens books</h1>
            <article className='book-list'>
                <div>
                    {bookComponents}
                </div>
            </article>
        </section>
    )
}
export default Books;