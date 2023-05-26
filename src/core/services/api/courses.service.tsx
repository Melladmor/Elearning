import { AxiosResponse } from "axios";
import API from "../api";
import BaseService from "../base.service";
import { ICourseResponse } from "src/core/models/course.model";

class CoursesService extends BaseService {
  private getCoursesURL: string = "/data/courses.json";

  constructor() {
    super();
  }

  getCourses(lng: string): Promise<AxiosResponse<ICourseResponse>> {
    return API.get<ICourseResponse>(`${this.getCoursesURL}`, {
      params: {
        lng,
      },
    });
  }

  
}
export default new CoursesService();
