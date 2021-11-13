import './App.scss';
import {Outlet} from "react-router-dom";

/**
 * The root component of our app. Contains the basic layout other pages inherit.
 */
export default function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
