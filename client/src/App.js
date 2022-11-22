import Home from './components/Home'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style/Home.css';
import './style/ExchangeBar.css';
import './style/SectionBar.css';



function App() {

  return (
    <BrowserRouter>
        <Link to="/"></Link>
        <Switch>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
