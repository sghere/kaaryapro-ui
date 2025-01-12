import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";

const Account = () => {
  const CardLinks = ["My Posts", "My Orders", "Help & support"];
  const Options = [
    "My Plans",
    "Wallet",
    "My Ratings",
    "Manage addresses",
    "About kaarya.pro",
  ];
  return (
    <div className="size-full grid gap-2">
      <div className="UserInfo grid gap-4 bg-primary-100 dark:bg-primary-600  p-4">
        <div className="flex items-center justify-between">
          <div className="grid gap-2">
            <h1 className="text-2xl font-semibold">Shubham Gaikwad</h1>
            <p className="text-sm">+91 8655301910</p>
          </div>
          <FaRegEdit className="font-extrabold cursor-pointer" />
        </div>
        <div className="flex gap-2">
          {CardLinks.map((e) => {
            return (
              <Link className="CardLink bg-primary-100 dark:bg-primary-600 border border-gray-300 p-4 rounded-lg">
                <p className="text-sm font-medium">{e}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <ul className="Options w-full bg-primary-100 dark:bg-primary-600 ">
        {Options.map((e) => {
          return (
            <Link to={e.replace(" ", "").toLowerCase()}>
              <li className="text-sm hover:bg-primary-200 dark:hover:bg-primary-500 w-full font-thin px-4 py-2">
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
