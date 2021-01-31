import { ICourse } from "../../components/courseList/course/Course.component";

export const UPDATE_COURSES = "UPDATE_COURSES";

export interface ICourseGroup {
  name: string;
  courses: ICourse[];
}

export type ICourseGroupList = ICourseGroup[];

export interface UpdateCoursesAction {
  type: typeof UPDATE_COURSES;
  name: string;
  courses: ICourse[];
}

export type CoursesActions = UpdateCoursesAction;

export const updateCourseGroup = (
  courseGroup: ICourseGroup
): UpdateCoursesAction => ({
  type: UPDATE_COURSES,
  name: courseGroup.name,
  courses: courseGroup.courses,
});
