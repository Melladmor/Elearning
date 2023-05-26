import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import CoursesService from "src/core/services/api/courses.service";
import { ICourseResponse, IKidCourse } from "src/core/models/course.model";
import { ErrorModel } from "src/core/models/generic.model";

export const getCoursesThunk = createAsyncThunk<IKidCourse[], string, { rejectValue: ErrorModel }>(
  "Couerses/GetCourses",
  async (lng, { rejectWithValue }) => {
    try {
      const response: any = await CoursesService.getCourses(lng);
      return response?.data.find((c: ICourseResponse) => c.lng === lng)?.courses;
    } catch (err: any) {
      let error: ErrorModel = {
        errorTitle: "",
        errorMessage: "",
        statusCode: 0,
      };
      if (err instanceof AxiosError) {
        error.errorMessage = err.message;
      } else error = err;
      return rejectWithValue(error);
    }
  },
);

type CoursesState = {
  error: ErrorModel | undefined;
  loading: boolean;
  courses: IKidCourse[];
};

const initialState = {
  error: undefined,
  loading: false,
  courses: [],
} as CoursesState;

const coursesSlice = createSlice({
  name: "questions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCoursesThunk.pending, (state, action) => {
      state.error = action.payload;
      state.loading = true;
    });
    builder.addCase(getCoursesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(getCoursesThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
  reducers: {},
});

export default coursesSlice;
export const coursesReducer = coursesSlice.reducer;
