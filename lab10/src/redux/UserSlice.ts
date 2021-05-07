import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser,  IUserSlice, IErrorMessage } from "./types";
import FetchStatuses from "./FetchStatuses";


const initialState: IUserSlice = {
  info: {
    login: "",
    name: "",
    location: "",
    avatar_url: "",
    html_url: "",
    followers: 0,
    following: 0,
    blog: "",
  },
  status: FetchStatuses.idle,
  error: undefined,
};

export const fetchUser = createAsyncThunk<IUser, string, {rejectValue: IErrorMessage;}>(
    "USER/FETCH_USER",
    (username: string, thunkAPI) =>
  fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.REACT_APP_LAB10_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) =>
      "message" in data
        ? thunkAPI.rejectWithValue(data as IErrorMessage)
        : (data as IUser)
    )
);


const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {clearUser: () => initialState},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = FetchStatuses.idle;
      state.error = undefined;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = FetchStatuses.succeeded;
      state.info = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = FetchStatuses.failed;
      state.error = "NOT FOUND";
    });
  },
});

export default UserSlice.reducer;