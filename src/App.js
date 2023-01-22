import './assets/styles/App.css';
import './assets/styles/form.css';
import './assets/styles/Responsive.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Landing />),
    },
    {
      path: "login/:type",
      element: (<Login />),
    },
    {
      path: "SignUp/:type",
      element: (<SignUp />),
      // children: [
      //   {
      //     path: "login",
      //     element: (<Login />),
      //   },
      // ]
    }
  ]);
  return (
    <div>
        <ToastContainer />
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
