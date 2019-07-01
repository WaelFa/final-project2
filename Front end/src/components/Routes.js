import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './HomePage/Home'
import Admin from './AdminPage/Admin'
class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/Admin' component={Admin}/>

            </div>
         );
    }
}
 
export default Routes;