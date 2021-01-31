import {
  CoursesActions,
  ICourseGroupList,
  UPDATE_COURSES,
} from "./courses.actions";

type CourseGroupListState = ICourseGroupList;

const initialState: CourseGroupListState = [
  {
    name: "2020-1",
    courses: [],
  },
  {
    name: "2020-2",
    courses: [],
  },
  {
    name: "2021-1",
    courses: [],
  },
  {
    name: "2021-2",
    courses: [],
  },
];

export default (
  state: CourseGroupListState = initialState,
  action: CoursesActions
): CourseGroupListState => {
  switch (action.type) {
    case UPDATE_COURSES: {
      const { name, courses } = action;

      return state.map((courseGroup) =>
        courseGroup.name === name ? { name, courses } : courseGroup
      );
    }

    default:
      return state;
  }
};
