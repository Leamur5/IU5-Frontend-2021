
import React, { useState } from "react";
import { useHistory, useRouteMatch, withRouter } from "react-router-dom";
import './UserSearch.css';

const removeEndSlashIfExist = (path) =>
  path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;

const UserSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const history = useHistory();
  const url = removeEndSlashIfExist(useRouteMatch().url);
  const handleSubmit = () => {
    if (value.trim().length !== 0) {
      onSearch(value);
      setValue("");
      history.push(process.env.REACT_APP_DEV === "true" ? "/UserInfo" : "/lab9/build/UserInfo");
    }
  };

  return (
    <div className="user-search-wrapper">
      Поиск по GitHub
      <input
        className="user-search-input"
        type="text"
        placeholder="Введите ник..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key.toLowerCase() === "enter") handleSubmit();
        }}
      />
      
      <button className="user-search-button" type="button" onClick={handleSubmit}>
        Погнали
      </button>
      <img alt="github" src="https://www.shareicon.net/data/2016/07/08/116859_github_512x512.png" className="github-icon" />
    </div>
  );
};

export default withRouter(UserSearch);