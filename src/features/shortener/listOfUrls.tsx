import { ShortenedUrl } from "@/types/types";
import CopyButton from "./copyButton";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  list: (ShortenedUrl | null)[];
};

const ListOfUrls = ({ list }: Props) => {
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const isDesktopScreen = useMediaQuery("(min-width:1024px)");


  return (
    <ul className="flex flex-col gap-4 w-5/6 2xl:w-4/6 mx-auto pt-4">
      {list.map((el: any, index) => {
        console.log(el);
        return (
          <li
            key={index}
            className="flex lg:flex-row flex-col  lg:items-center justify-between py-4 px-4 lg:px-8 gap-4 text w-full bg-white rounded-md"
          >
            <div className="flex lg:flex-row flex-col lg:w-[82%]  justify-between ">
              <p className="lg:text-left text-black text-ellipsis overflow-hidden whitespace-nowrap lg:w-2/3">
                {el.originalUrl}
              </p>
              {!isDesktopScreen && <hr className="  my-2 -mx-4 w-auto" />}
              <p className="lg:text-right text-cyan-400 lg:w-1/3">
                {el.shortenedUrl}
              </p>
            </div>
            <div className="lg:w-[15%]">
              <CopyButton
                url={el.shortenedUrl}
                index={index}
                active={activeBtn === index}
                setActive={setActiveBtn}
              >
                {activeBtn === index ? "Copied!" : "Copy"}
              </CopyButton>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfUrls;
