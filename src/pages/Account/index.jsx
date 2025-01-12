import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";
import {
  FaClipboardList,
  FaWallet,
  FaStar,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";
import Button from "@common/components/Button";

const Account = () => {
  const CardLinks = [
    { name: "My Posts", icon: <FaClipboardList /> },
    { name: "My Orders", icon: <FaWallet /> },
    { name: "Help & support", icon: <FaInfoCircle /> },
  ];

  const Options = [
    { name: "My Plans", icon: <FaClipboardList /> },
    { name: "Wallet", icon: <FaWallet /> },
    { name: "My Ratings", icon: <FaStar /> },
    { name: "Manage addresses", icon: <FaMapMarkerAlt /> },
    { name: "About kaarya.pro", icon: <FaInfoCircle /> },
  ];
  return (
    <div className="size-full grid gap-2">
      <div className="UserInfo grid gap-4 bg-primary-100 dark:bg-primary-900  p-4">
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
              <Link className="CardLink grid gap-2 bg-primary-100 dark:bg-primary-900 border border-gray-300 p-4 rounded-lg">
                {e.icon}
                <p className="text-sm font-medium">{e.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <ul className="Options w-full bg-primary-100 dark:bg-primary-900 ">
        {Options.map((e) => {
          return (
            <Link to={e.name.replace(" ", "").toLowerCase()}>
              <li className="text-sm flex gap-3 items-center  dark:hover:text-primary-300 w-full font-thin px-4 py-2">
                {e.icon}
                {e.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <Button intent="failureAlt">Logout</Button>
    </div>
  );
};

export default Account;
