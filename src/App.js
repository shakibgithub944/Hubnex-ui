import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ RouterProvider }from 'react-router-dom'
import { router } from './Components/Router/Router';

function App() {
  return (
    <div className="">
         <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
