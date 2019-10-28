import React, {Component} from "react";

export default function Message(props) {
    return (<div onClick={props.onMessageAccepted} className="message">
        {props.message}
    </div>)
}

