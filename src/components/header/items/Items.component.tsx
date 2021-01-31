import React, { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { injectClassNames } from "utils/css";
import styles from "./Items.module.scss";

const { items, active } = styles;

interface Ilinks {
  name: string;
  url: string;
  icon: string;
  iconStyle: CSSProperties;
  alias: string[];
}

const links: Ilinks[] = [
  {
    name: "Home",
    url: "/",
    icon: "fa fa-home",
    iconStyle: { fontSize: "20px" },
    alias: [],
  },
  {
    name: "Plan",
    url: "/plan",
    icon: "fa fa-graduation-cap",
    iconStyle: { fontSize: "18px" },
    alias: [],
  },
  //{ name: "Pages", url: "/pages", alias: ["/[page]"] },
  {
    name: "Setting",
    url: "/profile",
    icon: "fa fa-cog fa-2x",
    iconStyle: { fontSize: "20px" },
    alias: [],
  },
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul className={items}>
      {links.map(({ name, url, icon, iconStyle, alias }) => (
        <li
          key={name}
          className={injectClassNames([
            active,
            pathname === url || alias.includes(pathname),
          ])}
        >
          <Link href={url}>
            <div>
              <i className={icon} style={iconStyle}></i>
              <span>{name}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
