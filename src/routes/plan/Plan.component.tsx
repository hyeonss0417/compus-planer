import React from "react";
import Head from "next/head";
import styles from "./Plan.module.scss";
import Course from "../../components/courseList/course";
import CourseList from "../../components/courseList";
import { ICourseList } from "../../components/courseList/CourseList.component";
import { ICourse } from "../../components/courseList/course/Course.component";

const { main, course } = styles;

interface ICourseData {
  name: string;
  courses: ICourse[];
}

const courseListData: ICourseData[] = [
  {
    name: "2020-1",
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

export default function Plan(): JSX.Element {
  return (
    <>
      <Head>
        <title>Plan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={main}>
        {courseListData.map((courseList) => (
          <div className={course}>
            <h2>{courseList.name}</h2>
            <CourseList courses={courseList.courses} />
          </div>
        ))}
      </main>
    </>
  );
}
