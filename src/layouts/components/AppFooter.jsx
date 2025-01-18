import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { CiUser,CiHome,CiGrid41,CiSearch,CiBellOn     } from "react-icons/ci";
import { Link } from "react-router";
const AppFooter = () => {
  const pages = [
    { name: "Home", icon: CiHome  },
    { name: "Search", icon: CiSearch  },
    { name: "Feed", icon: CiGrid41 },
    { name: "Notification", icon: CiBellOn  },
    { name: "Account", icon: CiUser },
  ];
  return (
    <footer className="flex gap-2 items-center justify- dark:bg-transparent p-2 h-[80px] fixed bottom-0 left-0 w-full">
      {pages.map(({ name, icon: Icon }, index) => {
        return (
          <Link
            className=" size-full grid text-xs gap-1 place-items-center"
            key={"NavItems" + index}
            to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
          >
            <Icon className="size-6" key={index} />
            {/* <h6>{name}</h6> */}
          </Link>
        );
      })}
    </footer>
  );
};

export default AppFooter;
