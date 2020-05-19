import React, { useRef, Component } from 'react';
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
                
                this.setState({ events:res.data });
            })
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
                                <th scope="col">Option</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.events.map(event =>
                                <tr>
                                    <td >{event.name}</td>
                                    <td>{event.description}</td>
                                    <td>{event.option}</td>
                                    <td>action</td>
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