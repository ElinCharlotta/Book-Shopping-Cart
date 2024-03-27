import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './BookInfo.css';

function BooksInfo() {
    const params = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        async function getBooks() {
            const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
            const data = await response.json();
            return data;
        }

        async function filterBooks() {
            const books = await getBooks();
            const filteredBook = books.find(book => book.title === params.name);
            setBook(filteredBook);
        }

        filterBooks();
    }, []);
    return (
        <div>
            {book && (
                <>
                < main className="book-details">
    
                    <section className="book" style={{ backgroundColor: book.color }}>
                        <h4 className='book__title'>{book.title}</h4>
                        <p className='book__author'>{book.author}</p>
                    </section>
                    <section className='book-info'>
                        <h3 className='book-info__title'>{book.title}</h3>
                        <p className='book-author'>{book.author}</p>
                        <p className='book-plot'>{book.plot}</p>

                        <article className="book-quotes">
                            <p className='book-audience'>Audience: {book.audience}</p>
                            <p className='book-pages'>Pages: {book.pages}</p>
                            <p className='book-year'>First published: {book.year}</p>
                            <p className='book-publisher'>Publisher: {book.publisher}</p>
                        </article>
                    </section>
                    </main>
                </>
            )}
        </div>
    );
}

export default BooksInfo;