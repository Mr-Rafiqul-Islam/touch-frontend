import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user_id: string | null;
  passenger_phone: string | null;
  passenger_name: string | null;
}

const initialState: UserState = {
  user_id: null,
  passenger_phone: null,
  passenger_name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => initialState,
  },
});

export const { setUserData, resetUser } = userSlice.actions;
export default userSlice.reducer;
