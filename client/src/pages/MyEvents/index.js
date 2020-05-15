import React from "react";
import { Redirect } from "react-router-dom";
import EventForm from "../../components/EventForm";
import Card from "../../components/Card"

function MyEvents () {
    return (
        <div>
            <Card>

            </Card>
            <Redirect from="/addevent" to="/myevents"/>
        </div>
    )
}
export default MyEvents;