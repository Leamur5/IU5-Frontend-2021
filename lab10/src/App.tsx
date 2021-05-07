import React, { useState} from 'react';
import { Route, Switch,  withRouter } from 'react-router-dom';

import './App.css';

import UserSearch from './components/UserSearch';
import UserInfo from './components/UserInfo';



function App() {
  const [user, setUser] = useState("");
  return ( 
    <div className = "App" >
       
      <Switch>
        <Route exact path={process.env.REACT_APP_DEV === "true" ? "/" : "/lab10/build/"}>
          <UserSearch onSearch={(username) => setUser(username)} />
        </Route>
        <Route path={process.env.REACT_APP_DEV === "true" ? "/UserInfo" : "/lab10/build/UserInfo"}>
          <UserInfo username={user} / >
        </Route>
                
      </Switch>   
            
    </div>
  );  
}

export default withRouter(App);