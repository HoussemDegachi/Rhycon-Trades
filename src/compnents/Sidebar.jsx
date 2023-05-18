import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ user , channel }) {
  const [ checked , setChecked ] = useState(1)
  
  useEffect(() => {
    if(channel === 'intro'){
      setChecked(1)
    }else if(channel === 'faq'){
      setChecked(2)
    }else if(channel === 'announcements'){
      setChecked(3)
    }else if(channel === 'results'){
      setChecked(4)
    }else if(channel === 'general'){
      setChecked(5)
    }else if(channel === 'begginer'){
      setChecked(6)
    }else if(channel === 'ask'){
      setChecked(7)
    }else if(channel === 'claim'){
      setChecked(8)
    }else if(channel === 'polls'){
      setChecked(9)
    }else if(channel === 'invites'){
      setChecked(10)
    }

  }, [channel])

  return (
    <aside className="sidebar">
      <figure className="sidebar--logo">
        <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1091012283309760552/logo.png" />
      </figure>
      <div className="sidebar--content">
        <ul className="sidebar--channels">
          <li className="sidebar--channels__items">
            <h6 className="channels__header">Main Menu</h6>
            <button onClick={() => {setChecked(1)}} className={`channels__btn ${checked === 1 && 'channels__btn-checked'}`}>
              <Link to="/app/intro">Introduction</Link>
            </button>
            <button onClick={() => {setChecked(2)}} className={`channels__btn ${checked === 2 && 'channels__btn-checked'}`}>
              <Link to="/app/faq">faq</Link>
            </button>
            <button onClick={() => {setChecked(3)}} className={`channels__btn ${checked === 3 && 'channels__btn-checked'}`}>
              <Link to="/app/announcements">announcements</Link>
            </button>
            <button onClick={() => {setChecked(4)}} className={`channels__btn ${checked === 4 && 'channels__btn-checked'}`}>
              <Link to="/app/results">results</Link>
            </button>
          </li>
          <li className="sidebar--channels__items">
            <h6 className="channels__header">Text channels</h6>
            <button onClick={() => {setChecked(5)}} className={`channels__btn ${checked === 5 && 'channels__btn-checked'}`}>
              <Link to="/app/general">General chat</Link>
            </button>
            <button onClick={() => {setChecked(6)}} className={`channels__btn ${checked === 6 && 'channels__btn-checked'}`}>
              <Link to="/app/begginer">begginer 's chat</Link>
            </button>
            <button onClick={() => {setChecked(7)}} className={`channels__btn ${checked === 7 && 'channels__btn-checked'}`}>
              <Link to="/app/ask">ask a mentor</Link>
            </button>
          </li>
          <li className="sidebar--channels__items">
            <h6 className="channels__header">interactive</h6>
            <button onClick={() => {setChecked(8)}} className={`channels__btn ${checked === 8 && 'channels__btn-checked'}`}>
              <Link to="/app/claim">claim roles</Link>
            </button>
            <button onClick={() => {setChecked(9)}} className={`channels__btn ${checked === 9 && 'channels__btn-checked'}`}>
              <Link to="/app/polls">polls</Link>
            </button>
            <button onClick={() => {setChecked(10)}} className={`channels__btn ${checked === 10 && 'channels__btn-checked'}`}>
              <Link to="/app/invites">check invites</Link>
            </button>
          </li>
        </ul>
        <div className="sidebar--user">
          <div className="sidebar--user__content">
            <figure className="user--logo">
              <img src={user.photoURL} />
            </figure>
            <p className="user--name">{user && user.displayName}</p>
          </div>
          <button className="user--settings">
            <FontAwesomeIcon icon="fa fa-gear" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
