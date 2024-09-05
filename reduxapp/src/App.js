
import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './contact';
import Header from './header';
import { myStore } from './redux/config';
import { Provider } from 'react-redux';
import Web from './Web';

let routerPaths = createBrowserRouter([
  {"path":"/Home","element":<Home/>},
  {"path":"/About","element":<About/>},
  {"path":"/Contact","element":<Contact/>},
])
function App() {
  return (
    <Provider store = {myStore}>
      <div>
          <RouterProvider router = {routerPaths} />
      </div>
    </Provider>
  );
}

export default App;
