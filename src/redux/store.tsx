import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "./features/courses.slice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
