import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/layout/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Shipping from './components/Shipping/Shipping';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping /></PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
