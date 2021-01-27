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

export default function Sidebar(): JSX.Element {
  //const notifications = useSelector((state: RootState) => state.courses.);

  return (
    <aside className={sidebar}>
      <div className={sidebarProfile}>
        <h2 className={sidebarProfileName}>
          <Placeholder content={name} length="short" />
        </h2>
        <p className={sidebarProfileBio}>
          <Placeholder content={bio} length="medium" />
        </p>
      </div>
      <div className={sidebarPages}>
        <h3>Pages</h3>
        <Pages className={sidebarPagesList} activeClass={sidebarPagesActive}>
          <li>
            <Placeholder length="short" />
          </li>
          <li>
            <Placeholder length="short" />
          </li>
          <li>
            <Placeholder length="short" />
          </li>
        </Pages>
      </div>
    </aside>
  );
}
