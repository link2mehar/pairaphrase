import { configureStore } from "@reduxjs/toolkit";
import translationSlice from "./slices/translation-slice";

const store = configureStore({
  reducer: {
    translationWizard: translationSlice.reducer
  }
});

export default store;
