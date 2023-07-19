import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userdata",
  initialState: {
    user: {
      address: "address",
      city: "city",
      createdAt: "createdAt",
      firstname: "firstname",
      id: "id",
      lastname: "lastname",
      mail: "mail",
      password: "password",
      phonenumber: "phonenumber",
      role: "role",
      updatedAt: "updatedAt",
      __v: 0,
      _id: "_id",
    },
  },
  reducers: {
    SET: (state, action) => {
      state.user = action.payload;
    },
    reset: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SET } = userDataSlice.actions;
export default userDataSlice.reducer;