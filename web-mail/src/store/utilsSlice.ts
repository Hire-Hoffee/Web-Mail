import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type colorTheme = {
  theme: string | null;
};

const initialState: colorTheme = {
  theme: "white",
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    changeThemeState: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeThemeState } = utilsSlice.actions;

export default utilsSlice.reducer;
