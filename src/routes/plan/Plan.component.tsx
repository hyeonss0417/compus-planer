import React from "react";
import Head from "next/head";
import Image from "components/image";
import Placeholder from "components/placeholder";
import { useUser } from "hooks/user";
import styles from "./Plan.module.scss";

const {
  course,
  courseList,
  courseItem,
  courseItemGrade,
  courseItemContent,
  courseOption,
  courseContainer,
  profileContent,
  followersIcon,
  followersPlaceholder,
  about,
} = styles;

export default function Plan(): JSX.Element {
  const { name, bio, avatar_url, followers } = useUser();

  return (
    <>
      <Head>
        <title>Plan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        {/* <div className={profileMain}>
          <Image
            isPlaceholder={!avatar_url}
            src={avatar_url}
            className={profilePicture}
          />
          <div className={profileContent}>
            <h1>
              <Placeholder content={name} length="short" />
            </h1>
            <p>
              <Placeholder content={bio} length="long" />
            </p>
            <h3>
              <Icon asset="People" className={followersIcon} />
              {followers ?? <span className={followersPlaceholder} />} Followers
            </h3>
          </div>
        </div> */}
        <div className={course}>
          <h2>2020-1</h2>
          <div className={courseList}>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>A+</span>
                </div>
                <div className={courseItemContent}>
                  <h3>World Prehistory 📌</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>A</span>
                </div>
                <div className={courseItemContent}>
                  <h3>African American History 📌</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>B</span>
                </div>
                <div className={courseItemContent}>
                  <h3>African American History</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>A+</span>
                </div>
                <div className={courseItemContent}>
                  <h3>World Prehistory 📌</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>A</span>
                </div>
                <div className={courseItemContent}>
                  <h3>African American History 📌</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>B</span>
                </div>
                <div className={courseItemContent}>
                  <h3>African American History</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
            <div className={courseItem}>
              <div className={courseContainer}>
                <div className={courseItemGrade}>
                  <span>B</span>
                </div>
                <div className={courseItemContent}>
                  <h3>African American History</h3>
                  <p>ICS 18A</p>
                </div>
              </div>
              <div className={courseOption}>
                <span>
                  <i className="fa fa-ellipsis-v"></i>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
