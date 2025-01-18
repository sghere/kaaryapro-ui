import Button from "@common/components/Button";
import { pages } from "@common/constants";
import React from "react";
import { BsChevronLeft, BsThreeDots } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pagePath = location.pathname.split("/");
  const pageName = pagePath[pagePath.length - 1];
  const displayPageName = pages[pageName]?.title || "Home";
  return (
    <div className="h-[80px] pt-6 flex items-center justify-between px-10">
      <Button
        intent="icon"
        className="text-primary-300"
        onClick={() => navigate(-1)}
      >
        <BsChevronLeft />
      </Button>
      <h2 className="font-semibold text-2xl">{displayPageName}</h2>
      <BsThreeDots className="size-8 text-primary-300" />
    </div>
  );
};

export default AppHeader;
