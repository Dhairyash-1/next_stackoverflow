"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../../ui/input";

interface LocalSearchBarProp {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchBarProp) => {
  return (
    <div
      className={`background-light800_darkgradient  flex min-h-[56px] w-full grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="localsearchbar"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        onChange={() => {}}
      />

      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="localsearchbar"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
