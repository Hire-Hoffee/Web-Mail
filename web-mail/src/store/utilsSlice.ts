import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Utils } from "@/types/otherTypes";

const initialState: Utils = {
  theme: null,
  isLoading: false,
  toggleFilter: false,
  settingsOpen: null,
  themeSwitcher: true,
  langSwitcher: false,
  lang: localStorage.getItem("lang") || "ru",
  newLetterPopup: false,
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
    themeSwitchOpened: (state, action: PayloadAction<boolean>) => {
      state.themeSwitcher = action.payload;
      state.langSwitcher = false;
    },
    langSwitchOpened: (state, action: PayloadAction<boolean>) => {
      state.langSwitcher = action.payload;
      state.themeSwitcher = false;
    },
    changeSiteLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    changeNewLetterPopup: (state, action: PayloadAction<boolean>) => {
      state.newLetterPopup = action.payload;
    },
  },
});

export const {
  changeThemeState,
  changeLoadingStatus,
  changeFilterToggle,
  changeSettingsOpen,
  themeSwitchOpened,
  langSwitchOpened,
  changeSiteLang,
  changeNewLetterPopup,
} = utilsSlice.actions;

export default utilsSlice.reducer;
