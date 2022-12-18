import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type colorTheme = {
  theme: string | null;
  isLoading: boolean;
};

const initialState: colorTheme = {
  theme: "white",
  isLoading: false,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    changeThemeState: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    changeLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeThemeState } = utilsSlice.actions;

export default utilsSlice.reducer;
