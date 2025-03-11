// New way to use react-router
// This new way used to load data or to submit data using forms
// By using createBrowserRouter([{path: , element: },{}])
// In this way we have special case to handle errors instead of "*"
// It's the errorElement that appear if the url doesn't exist

// These days applications sit a parent route and inside it put all routes that they want
// To fetch using route "loader" :
// 1) Create the loader
// 2) Provide the loader
// 3) Provide the data for the page
// Data Loader can be placed anywhere in our codebase, but we will create it inside the file that will contain it

// To install tailwind:
// 1) Go to document/installation/framework-guides/vite and do same steps
// 2) search about prettier tailwind, then open the github link and create file name it prettier.config.cjs (prettier configration) and add inside it like in the github
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  // we can include children property that will recieve an array of children
  // if we did'nt include path for element it will called layout route
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />, // The error will appear as a part of the page (mean that's not the error will appear in the page)
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
