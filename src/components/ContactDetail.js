import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
  return (
    <div className="main">
        <div className="ui three column page grid">
            <div className="column"></div>
            <div className="column">
            <div className="item">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user"/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
        <div className="ui div center aligned">
            <Link to="/">
            <button className="ui button blue center">Back to Contact List</button>
            </Link>
        </div>
        </div>
        </div>
        <div className="column"></div>
        </div>
    </div>
  );
};

export default ContactDetail;