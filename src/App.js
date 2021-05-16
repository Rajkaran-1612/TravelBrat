import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Footer';

import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import SearchPage from './Components/pages/SearchPage';

function App() {
  return (
    
    

    <>   
      <Router>
        
      
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/search' component={SearchPage} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        
        
              </Router>
    </>
  );
}

export default App;