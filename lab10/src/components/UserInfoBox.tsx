import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useHistory } from "react-router-dom";
import './UserInfoBox.css';

const UserInfoBox: React.FC = () => { 
    const { info } = useAppSelector((state) => state.user);
    const history = useHistory();
    const backClick = () => {
        history.push(process.env.REACT_APP_DEV === "true" ? "/" : "/lab9/build/");
    };
    return(
    
        <div className="user-info-box">
            <img src={info.avatar_url} alt={info.login} className="avatar" />
            <h1 className="login">{info.login}</h1>
            <h2 className="name">{info.name}</h2>
            <div className="followers">
      
            {info.followers} followers &#129309; {info.following} following &#128064;
        </div>
        {info.location ? (
        <div className="location">
        
            {info.location}
        </div>) : (<></>)}
        {info.blog ? (
        <div>
        
            <a href={info.blog} rel="noreferrer" target="_blank" id="blog-info"className="user-link">
                {info.blog}
            </a>
        </div>
        ) : (
        <></>)}
        <a href={info.html_url} rel="noreferrer" target="_blank" className="user-link">
            Ссылка на GitHub
        </a>
        <button type="button" onClick={backClick} className="back-button">
            Ищем другого!
        </button>
  </div>
);
}

export default UserInfoBox;