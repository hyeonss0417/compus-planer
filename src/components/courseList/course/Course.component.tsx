import React from "react";
import styles from "./Course.module.scss";

const {
  course,
  courseItemContainer,
  courseItemGrade,
  courseItemContent,
  courseOption,
} = styles;

export interface ICourse {
  grade: string;
  title: string;
  meta: string;
}

export default function Course({ grade, title, meta }: ICourse): JSX.Element {
  return (
    <div className={course}>
      <div className={courseItemContainer}>
        <div className={courseItemGrade}>
          <span>{grade}</span>
        </div>
        <div className={courseItemContent}>
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
      </div>
      <div className={courseOption}>
        <span>
          <i className="fa fa-ellipsis-v"></i>
        </span>
      </div>
    </div>
  );
}
