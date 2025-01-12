import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router";
const AppFooter = () => {
  const pages = [
    { name: "Home", icon: FaHome },
    { name: "Search", icon: FaSearch },
    { name: "Home", icon: FaHome },
    { name: "Notification", icon: FaBell },
    { name: "Account", icon: FaUser },
  ];
  return (
    <footer className="flex gap-2 items-center justify-around bg-primary-100 dark:bg-primary-500 p-2 h-[50px] fixed bottom-0 left-0 w-full">
      {pages.map(({ name, icon: Icon }, index) => {
        return (
          <Link
            className=" size-full grid text-xs gap-1 place-items-center"
            key={"NavItems" + index}
            to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
          >
            <Icon key={index} />
            <h6>{name}</h6>
          </Link>
        );
      })}
    </footer>
  );
};

export default AppFooter;
