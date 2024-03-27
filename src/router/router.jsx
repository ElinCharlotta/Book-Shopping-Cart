import Books from '../Pages/Books'
import BooksInfo from '../Pages/BookInfo'

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Books />
    },
    {
        path: '/books/:name', //Dynamisk url där :name ersätts med något 
        element: <BooksInfo />
    }]);

export default router