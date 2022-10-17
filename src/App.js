import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

import NavigationBar from "./components/NavigationBar/NavigationBar";
import WordCounter from "./pages/WordCounter/WordCounter";


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/word-counter" component={WordCounter}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;

