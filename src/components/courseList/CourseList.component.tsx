import React from "react";
import styles from "./CourseList.module.scss";
import Course, { ICourse } from "./course/Course.component";

const { courseList } = styles;

export interface ICourseList {
  courses: ICourse[];
}

export default function CourseList({ courses }: ICourseList): JSX.Element {
  return (
    <div className={courseList}>
      {courses.map((item) => (
        <Course {...item} />
      ))}
    </div>
  );
}
