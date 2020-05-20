import React, { useRef, Component } from 'react';
import { Link } from 'react-router-dom';

import Card from "../Card";
import axios from 'axios';
class Profile extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('api/events')
            .then(res => {
                console.log("res.data", res.data);

                this.setState({ events: res.data });
            })
    }
    handleDelete(id) {
        //delete this one from db
        axios.delete(`api/events/`+ id).then(res => {
            console.log(`delete ${id}`);
        })
        //update the state with new array
       const events = this.state.events.filter(event => event._id != id )
       this.setState({events});
     }

     handleEdit(id) {
        //update this one from db
        axios.post(`api/events/addevent`+ id).then(res => {
            console.log(`Edit ${id}`);
        })
        //update the state with new array
       const events = this.state.events.update(event => event._id != id )
       this.setState({events});
     }


    render() {
        return (
            <div className=" container">
                <Card title="All Events">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map(event =>
                                <tr key={event._id}>
                                    <td >{event.name}</td>
                                    <td>{event.description}</td>
                                    <td> <Link to={{pathname:`/editevent/${event._id}`}}>Edit</Link></td>
                                    <td>


                                        <button onClick={() => this.handleDelete(event._id)}>Delete</button>


                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </Card>

            </div>

        )
    }
}


export default Profile;