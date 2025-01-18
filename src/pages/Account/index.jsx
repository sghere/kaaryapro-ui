import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";
import {
  CiMedicalClipboard ,
  CiWallet,
  CiStar,
  CiLocationOn,
  CiCircleInfo,
  CiLogout 
} from "react-icons/ci";

const Account = () => {
  const CardLinks = [
    { name: "My Posts", icon: <CiMedicalClipboard  /> },
    { name: "Help & support", icon: <CiCircleInfo  /> },
  ];

  const Options = [
    { name: "My Plans", icon: CiMedicalClipboard  },
    { name: "Wallet", icon: CiWallet },
    { name: "My Ratings", icon: CiStar   },
    { name: "Manage addresses", icon: CiLocationOn  },
    { name: "About kaarya.pro", icon: CiCircleInfo  },
    { name: "logout", icon: CiLogout  },

  ];
  return (
    <div className="size-full grid gap-2">
      <div className="UserInfo grid gap-4 p-4 pt-20">
        <div className="flex items-center justify-center text-center">
          <div className="grid">
            <h1 className="text-3xl font-semibold">Shubham Gaikwad</h1>
            <p className="text-xs text-primary-600">+91 8655301910</p>
          </div>
          {/* <FaRegEdit className="font-extrabold cursor-pointer" /> */}
        </div>
        {/* <div className="flex gap-2">
          {CardLinks.map((e) => {
            return (
              <Link className="CardLink grid gap-2 bg-primary-100 dark:bg-primary-900 border border-gray-300 p-4 rounded-lg">
                {e.icon}
                <p className="text-sm font-medium">{e.name}</p>
              </Link>
            );
          })}
        </div> */}
      </div>
      <ul className="Options w-full ">
        {Options.map(({name,icon:Icon}) => {
          return (
            <Link to={name.replace(" ", "").toLowerCase()}>
              <li className="text-lg flex gap-3 items-center transition-all dark:hover:text-primary-300 w-full font-thin px-8 py-2">
                <Icon className="size-8"/>
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Account;
