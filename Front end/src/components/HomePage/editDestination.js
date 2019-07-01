import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'



class EditDestination extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:"",
            phone:'',
            email:''
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>

    {
        this.setState({
            ...this.props.destinations.filter(el=>el._id===this.props._id)
        })
    }
    editDestination=()=>
    {
       axios.put(`/edit-destination/${this.state._id}`,{
           name:this.state.name,
        phone:this.state.phone,
        email:this.state.email
     }) 
      .then(()=>this.props.editNearbyReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
        console.log(this.props.destinations)
        return ( 
            <div className='add-destination-container'>
            <h1>Edit Destination</h1>
             Name :
             <input  type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
             Phone :
             <input  type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
             Email :
             <input  type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
             <Link to='/contacts'>
             <button onClick={this.editDestination}>Edit Destination </button>
             </Link>

            </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        contacts:state.NearbyReducer
    }
} 

// const mapDispatchToProps=(dispatch)=>
// {
//     return {
//         editNearbyReducer:editdestination=>
//         {
//             dispatch({
//                 type:'EDIT_DESTINATION',
//                 editdestination
//             })
//         }
//     }
// }



export default connect(mapStateToProps)(EditDestination);