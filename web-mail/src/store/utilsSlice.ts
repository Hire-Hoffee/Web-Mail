import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Utils } from "@/types/otherTypes";

const initialState: Utils = {
  theme: "white",
  isLoading: false,
  toggleFilter: false,
  settingsOpen: null,
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
    changeFilterToggle: (state, action: PayloadAction<boolean>) => {
      state.toggleFilter = action.payload;
    },
    changeSettingsOpen: (state, action: PayloadAction<boolean>) => {
      if (!(state.settingsOpen === null && action.payload === false)) {
        state.settingsOpen = action.payload;
      }
    },
  },
});

export const { changeThemeState, changeLoadingStatus, changeFilterToggle, changeSettingsOpen } =
  utilsSlice.actions;

export default utilsSlice.reducer;
