import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";
import { useRouter } from "next/router";

const { logo } = styles;

type ITitleMap = Record<"/" | "/plan" | "/profile", string>;

const titleMap: ITitleMap = {
  "/": "ULife",
  "/plan": "PLAN",
  "/profile": "PROFEIL",
};

export default function Logo(): JSX.Element {
  const router = useRouter();
  const pathname = router.pathname as keyof ITitleMap;

  return (
    <div className={logo}>
      {/* <Link href="/">ULife</Link> */}
      <Link href="#">{titleMap[pathname]}</Link>
    </div>
  );
}
