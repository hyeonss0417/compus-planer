import React from "react";
import Image from "components/image";
import styles from "./Landing.module.scss";
import Link from "next/link";

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  landingNavigationWrapper,
} = styles;

export default function Landing(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={landing}>
        <div className={landingText}>
          <h1>Make your transfer admission easy</h1>
          <p>
            ULife is the best partner to help you transfer to university.
            <br />
            Get the information you need to find the best path to your degree.
          </p>
        </div>
        <div className={landingNavigationWrapper}>
          <Link href="/plan">Plan your transfer</Link>
        </div>
        <Image
          className={landingImage}
          src="/assets/landing.png"
          alt="Desktop & Mobile PWA Application"
          width="400px"
          height="340px"
        />
      </div>
    </div>
  );
}
