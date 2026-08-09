import { configureStore } from "@reduxjs/toolkit";

import LangSliceReducer from "./Slice/LanguageSlice";
//const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    languageSlice: LangSliceReducer,
  },
  /*   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),*/
});

//sagaMiddleware.run(rootSaga);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
