  import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Ourstory from './Ourstory';
import Membership from './Membership';
import Write from './Write';
import Signin from './Signin';
import Start from './Start';
import Header from './Header';
import Medium from './Medium';
 
const App = () => {
  
   
  return (
    <div>
    <Header />
    <Switch>

      <Route   exact path ="/" component={Medium} />  
      <Route   path ="/Ourstory" component={Ourstory} />      
      <Route   path ="/Membership" component={Membership} />      
      <Route   path ="/Write" component={Write} />      
      <Route   path ="/Signin" component={Signin} />      
      <Route   path ="/Start" component={Start} />            
      
       </Switch>

    </div>
  );
};

export default App;
