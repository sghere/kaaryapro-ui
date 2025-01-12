import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";

const Account = () => {
  const Options = [
    "My Plans",
    "Wallet",
    "My Ratings",
    "Manage addresses",
    "About kaarya.pro",
  ];
  return (
    <div className="size-full grid gap-2">
      <div className="UserInfo bg-hillary-100 dark:bg-hillary-900 flex items-center justify-between p-4">
        <div className="grid gap-2">
          <h1 className="text-2xl font-semibold">Shubham Gaikwad</h1>
          <p className="text-sm">+91 8655301910</p>
        </div>
        <FaRegEdit className="font-extrabold cursor-pointer" />
      </div>
      <ul className="Options w-full bg-hillary-100 dark:bg-hillary-900 ">
        {Options.map((e) => {
          return (
            <Link to={e.replace(" ", "").toLowerCase()}>
              <li className="text-sm hover:bg-hillary-200 dark:hover:bg-hillary-800 w-full font-thin px-4 py-2">
                {e}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Account;
