import { AppThunk } from "stores";
import { ICourseGroupList, updateCourseGroup } from "./courses.actions";

export const getCourseGroupList = (): AppThunk => async (dispatch) => {
  const courseGroupList: ICourseGroupList = await getBulkData();

  courseGroupList.map((courseGroup) =>
    dispatch(updateCourseGroup(courseGroup))
  );
};

function getBulkData(): Promise<ICourseGroupList> {
  return new Promise((resolve) => setTimeout(() => resolve(bulkData), 1000));
}

const bulkData = [
  {
    name: "2020-1",
    courses: [
      { grade: "A+", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "B", title: "World History", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
    ],
  },
  {
    name: "2020-2",
    courses: [
      { grade: "A+", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
    ],
  },
  {
    name: "2021-1",
    courses: [
      { grade: "A+", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
    ],
  },
  {
    name: "2021-2",
    courses: [
      { grade: "A+", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
      { grade: "A", title: "African American History", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory 📌", meta: "ICS 18A" },
      { grade: "B", title: "World Prehistory", meta: "ICS 18A" },
      { grade: "B+", title: "African American History 📌", meta: "ICS 18A" },
    ],
  },
];
