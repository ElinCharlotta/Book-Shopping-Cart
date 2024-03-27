import { useEffect, useState } from 'react'
import Product from '../components/Product/Product';

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
        <div>
            <h1>Books</h1>
            <section className='book-list'>
                <ul>
                    {bookComponents}
                </ul>
            </section>
        </div>
    )
}
export default Books;