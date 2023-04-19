import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import NavLink from "./NavLink";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const flexBetween = "flex items-center justify-between";
  const isDesktopScreen = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    isDesktopScreen && isMenuToggled && setIsMenuToggled(false);
  }, [isDesktopScreen]);

  return (
    <nav className="w-full mx-auto">
      <div className={`${flexBetween} gap-16 mx-auto w-5/6 2xl:w-4/6 py-10`}>
        {/*LEFT SIDE*/}
        <img src={Logo} alt="Logo of the website Shortly" />
        {isDesktopScreen ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-10`}>
              <NavLink content="Features" url="#features" />
              <NavLink content="Pricing" url="#pricing" />
              <NavLink content="Resources" url="#resources" />
            </div>
            {/*RIGHT SIDE*/}
            <div className={`${flexBetween} gap-12`}>
              <NavLink content="Login" url="#login" />
              <ActionButton content="Sign up" url="#sign-up" />
            </div>
          </div>
        ) : (
          <button
            className="hover:bg-gray-400 rounded-full hover:text-white p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {isMenuToggled ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        )}
      </div>

      {!isDesktopScreen && isMenuToggled && (
        <div className="relative w-5/6 mx-auto">
          <div className="absolute right-0 top-0 flex flex-col items-center gap-6 rounded-xl text-white text-lg bg-violet-700 w-full sm:w-1/2 p-8">
            <NavLink content="Features" url="#features" isModalLink={true} />
            <NavLink content="Pricing" url="#pricing" isModalLink={true} />
            <NavLink content="Resources" url="#resources" isModalLink={true} />
            <div className="border-b-[1px] border-violet-gray w-full opacity-25"></div>
            <NavLink content="Login" url="#login" isModalLink={true} />
            <ActionButton content="Sign up" url="#sign-up" isModal={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
