import { createSlice } from '@reduxjs/toolkit'

type UserDetails = {
  username: string,
  password: string,
}
const initialState: {userDetails: UserDetails} = {
  userDetails: {username: "", password: ""}
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setUserDetails(state, action: {type: string, payload: UserDetails}) {
      state.userDetails = action.payload;
    },
  }
})

export const { setUserDetails } = loginSlice.actions

export default loginSlice.reducer