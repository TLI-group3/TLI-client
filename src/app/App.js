import './App.scss';
import {ActionContainer} from '../components/chooseAction/ActionContainer';

/**
 * The root component of our app. Contains the basic layout other pages inherit.
 */
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ActionContainer />
      </header>
    </div>
  );
}
