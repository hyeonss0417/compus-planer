import React from "react";
import Head from "next/head";
import styles from "./Plan.module.scss";

const {
  course,
  courseList,
  courseItem,
  courseItemGrade,
  courseItemContent,
  courseOption,
  courseContainer,
} = styles;

export default function Plan(): JSX.Element {
  return (
    <>
      <Head>
        <title>Plan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
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
        <div className={course}>
          <h2>2020-2</h2>
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
