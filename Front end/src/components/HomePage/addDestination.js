import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
class AddDestination extends Component {

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }

    addDestination=()=>
    {
      axios.post('/add-destination',{...this.state})
       .then(()=>this.props.addNearbyReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }
    render() { 
        return ( 
            <div className='add-destination-container'>
             <h1>Add Destination</h1>
             Name :
             <input  type='text' name='name' onChange={this.handleChange}/>
             Phone :
             <input  type='text' name='phone' onChange={this.handleChange}/>
             Email :
             <input  type='text' name='email' onChange={this.handleChange}/>
             <Link to='/contacts'>
             <button onClick={this.addDestination}>Add Contact </button>
             </Link>

            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        addNearbyReducer:newdestination=>
        {
            dispatch({
                type:'ADD_DESTINATION',
                newdestination
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(AddDestination);