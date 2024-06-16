import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Root from './components/Root';
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';
import ErrorPage from './components/ErrorPage';
import BookDetails from './components/BookDetails';
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';
import ReaderReview from './components/ReaderReview';
import TopQuotes from './components/TopQuotes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listedBook',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: 'wishlist',
            element: <WishlistBooks></WishlistBooks>,
          }
        ]
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/readerReview',
        element: <ReaderReview></ReaderReview>,
      },
      {
        path: '/topQuotes',
        element: <TopQuotes></TopQuotes>,
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
