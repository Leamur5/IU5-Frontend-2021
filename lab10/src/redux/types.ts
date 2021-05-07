import FetchStatuses from "./FetchStatuses";

export interface IUser {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  blog: string;
}

export interface IUserSlice {
  info: IUser;
  status: FetchStatuses;
  error: string | undefined;
}

export interface IErrorMessage {
  message: string;
}