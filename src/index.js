import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  About  from './component/About';
import Home from './component/Home';
import Cart from './component/Cart';
import Offers from './component/Offers';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
const approuter = createBrowserRouter(
  [
    {
      path: "/" ,
      element : <App />,
      children: [
        {
          path: "/",
          element : <Home />,
        },
        {
          path: "/about",
          element : <About />
        },
        {
          path: "/cart",
          element : <Cart />
        },
        {
          path: "/offers",
          element : <Offers />
        }
      ]
    },
  ]
)
root.render(

    <Provider store={store} >
    <RouterProvider router={approuter} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
