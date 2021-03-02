import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'






import Navbar from './Navbar'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Home } from './Home'

const App=()=> {
    return (
       <>
       <Navbar/>
       <Switch>
          <Route exact path="/" component={Home}/> 
         
        
          
         
          <Redirect to="/"/>
       </Switch>
      
       </>
    )
}

export default App
