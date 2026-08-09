import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const langStore = localStorage.getItem("lang") || "sv";
const initialState = {
  lang: langStore,
};
const LangSlice = createSlice({
  name: "LangSlice",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLang } = LangSlice.actions;

export default LangSlice.reducer;
