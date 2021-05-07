
import React, { useState } from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import './UserSearch.css';

interface IUserSearchProps extends RouteComponentProps {
  onSearch: (username: string) => void;
}


const UserSearch: React.FC<IUserSearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const history = useHistory();
  
  const handleSubmit = () => {
    if (value.trim().length !== 0) {
      onSearch(value);
      setValue("");
      history.push(process.env.REACT_APP_DEV === "true" ? "/UserInfo" : "/lab10/build/UserInfo");
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

export default withRouter<IUserSearchProps, React.FC<IUserSearchProps>>(UserSearch);