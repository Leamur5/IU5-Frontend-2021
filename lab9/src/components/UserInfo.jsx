
import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import UserInfoBox from "./UserInfoBox.jsx";
import './UserInfo.css';

const UserInfo = ({ username }) => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
    const backClick = () => {
        history.push(process.env.REACT_APP_DEV === "true" ? "/" : "/lab9/build/");
    };
  useEffect(() => {
    if (username.trim().length) {
      fetch(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: {
          Authorization: `Token ${process.env.REACT_APP_KEY}`,
        },
      })
        .then((res) => {
          if (res.status === 404) {
            setError(true);
            return {};
          }
          return res.json();
        })
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }
  }, [username]);

  if (loading) return <div className="loading">Loading...</div>
  if (error) return(
    <div className="user-not-found">
      <h1>Такого пользователя нет &#128554;</h1>
      <button type="button" onClick={backClick} className="back-button">
            Ищем другого!
      </button>
    </div>
  );
  return <UserInfoBox info={user} />
  
};

export default withRouter(UserInfo);
