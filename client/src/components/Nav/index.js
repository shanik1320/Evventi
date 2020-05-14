import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Login from "../LoginForm";
import AuthButton from "../AuthButton";
import { UserContext } from "../../utils/UserContext";
//I want to add some basic inline styling here, even though we are bringing in styles
const buttonStyle = {
  marginRight: 10
};

function Nav() {

  const [user, dispatch] = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    if (open && width > 991) {
      setOpen(false);
    }
    setWidth(window.innerWidth)
  };

  // const toggleNav = () => {
  //   setOpen(!open);
  // };

  useEffect(() => {

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [])


  return (
    <nav className="navbar navbar-expand-lg navbar bg mb-2">
      <Link className="navbar-brand" to="/">
      <i class="far fa-star"></i>Evventi
        </Link>
      <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
        {user.username ? <span className="userText text-white ml-3 pt-1" to="#">Hi {user.username} !</span> : ""}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link style={buttonStyle} className=" btn btn secondary" to="/public">Public Page</Link>
            <Link style={buttonStyle} className="btn btn secondary" to="/protected">Calendar</Link>
            <Link style={buttonStyle} className="btn btn secondary" to="/addevent">Add an Event</Link>
            <Link style={buttonStyle} className="btn btn secondary" to="/allevents">Events</Link>
            <Link style={buttonStyle} className="btn btn secondary" to="/myevents">My Events</Link>
            {user.username ? "" :
              <Link style={buttonStyle} className="btn btn" to="/register">Register a New User</Link>
            }
            <AuthButton />
            
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Nav;
