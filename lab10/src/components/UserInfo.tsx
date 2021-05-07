
import React, { useEffect } from "react";
import { withRouter, useHistory, RouteComponentProps } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUser } from "../redux/UserSlice";
import FetchStatuses  from "../redux/FetchStatuses";
import UserInfoBox from "./UserInfoBox";
import './UserInfo.css';


interface IUserInfoProps extends RouteComponentProps {
  username: string;
}


const UserInfo: React.FC<IUserInfoProps> = ({ username }) => {
  const { error, status } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();


  const history = useHistory();
    const backClick = () => {
        history.push(process.env.REACT_APP_DEV === "true" ? "/" : "/lab9/build/");
    };
  useEffect(() => {
  if (username.trim().length) {
    dispatch(fetchUser(username));
  }
  }, [dispatch, username]);

  if (status === FetchStatuses.idle) return <div className="loading">Loading...</div>
  if (error) return(
    <div className="user-not-found">
      <h1>Такого пользователя нет &#128554;</h1>
      <button type="button" onClick={backClick} className="back-button">
            Ищем другого!
      </button>
    </div>
  );
  return <UserInfoBox />
  
};

export default withRouter<IUserInfoProps, React.FC<IUserInfoProps>>(UserInfo);