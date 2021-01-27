import React from "react";
import Pages from "components//pages";
import Image from "components/image";
import Placeholder from "components/placeholder";
import styles from "./CourseList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

const {
  sidebar,
  sidebarProfile,
  sidebarProfileImage,
  sidebarProfileName,
  sidebarProfileBio,
  sidebarPages,
  sidebarPagesList,
  sidebarPagesActive,
} = styles;

export default function CourseList(): JSX.Element {
  //const notifications = useSelector((state: RootState) => state.courses.);

  return <></>;
}
