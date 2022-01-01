import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Home from './Home'
import Credentials from './Credentials'
import Projects from './Projects'

import Contact from './Contact'

function App() {
  
  return (
    <div className="app">

          

    <Router>

      <Switch>

        <Route exact path='/'>
              <Header />
              <Home /> 
        </Route>

        <Route path='/projects'>
           <Header />
            <Projects />
        </Route>

        <Route path='/credentials'>
              <Header />
             <Credentials />
        </Route>

        <Route path='/Contact'>
            <Header />
            <Contact />
        </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;

           
           

        
        
