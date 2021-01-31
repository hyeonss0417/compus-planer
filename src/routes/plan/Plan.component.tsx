import React, { useEffect } from "react";
import Head from "next/head";
import styles from "./Plan.module.scss";
import CourseList from "../../components/courseList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { getCourseGroupList } from "../../stores/courses/courses.dispatchers";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

const { main, course, progress, pie, pieItem } = styles;

export default function Plan(): JSX.Element {
  const dispatch = useDispatch();
  const courseGroupList = useSelector(
    (state: RootState) => state.courseGroupList
  );

  useEffect(() => {
    dispatch(getCourseGroupList());
  }, []);

  return (
    <>
      <Head>
        <title>Plan</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={main}>
        {courseGroupList.map((courseList) => (
          <div className={course}>
            <h2>{courseList.name}</h2>
            <CourseList courses={courseList.courses} />
          </div>
        ))}
        <div className={progress}>
          <h2>Progress</h2>
          <div>
            <ResponsiveLine
              data={gpaData}
              margin={{ top: 10, right: 80, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              enableGridX={false}
              enableSlices={"x"}
              legends={[
                {
                  anchor: "top-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className={pie}>
          <div className={pieItem}>
            <h2>Requirements</h2>
            <div>
              <ResponsivePie
                data={requireData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: "nivo" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: "color" }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "ruby",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "c",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "go",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "python",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "scala",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "lisp",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "elixir",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "javascript",
                    },
                    id: "lines",
                  },
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
          <div className={pieItem}>
            <h2>Recommendation</h2>
            <div>
              <ResponsivePie
                data={recommendationData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: "accent" }}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: "color" }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "ruby",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "c",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "go",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "python",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "scala",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "lisp",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "elixir",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "javascript",
                    },
                    id: "lines",
                  },
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const gpaData = [
  {
    id: "All",
    color: "hsl(310, 70%, 50%)",
    data: [
      {
        x: "2020-1",
        y: 3.58,
      },
      {
        x: "2020-2",
        y: 3.85,
      },
      {
        x: "2021-1",
        y: 3.5,
      },
      {
        x: "2021-2",
        y: 3.8,
      },
    ],
  },
  {
    id: "Requirements",
    color: "hsl(125, 70%, 50%)",
    data: [
      {
        x: "2020-1",
        y: 3.9,
      },
      {
        x: "2020-2",
        y: 3.7,
      },
      {
        x: "2021-1",
        y: 3.8,
      },
      {
        x: "2021-2",
        y: 3.95,
      },
    ],
  },
];

const requireData = [
  {
    id: "pass",
    label: "pass",
    value: 5,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "in progress",
    label: "in progress",
    value: 2,
    color: "hsl(103, 70%, 50%)",
  },
  {
    id: "fail",
    label: "fail",
    value: 1,
    color: "hsl(357, 70%, 50%)",
  },
];
const recommendationData = [
  {
    id: "pass",
    label: "pass",
    value: 3,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "in progress",
    label: "in progress",
    value: 1,
    color: "hsl(103, 70%, 50%)",
  },
  {
    id: "fail",
    label: "fail",
    value: 1,
    color: "hsl(357, 70%, 50%)",
  },
];
