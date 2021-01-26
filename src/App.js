import Nav from './Nav'
import Section from "./Section"
import Contact from "./Contact"
import About from "./About"
import Detail from "./Detail"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      
      <Nav/>
      <Switch>

      <Route path="/" exact component={Section} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/detail/:id" component={Detail} />

      </Switch>
    
      
    </div>

    </Router>
    
  );
}

export default App;
