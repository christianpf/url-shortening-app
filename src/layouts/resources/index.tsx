import ResourceCard from "./ResourceCard";
import resourcesData from "@/data/resources.json";
import fcImg from "@/assets/icon-fully-customizable.svg";
import brImg from "@/assets/icon-brand-recognition.svg";
import drImg from "@/assets/icon-detailed-records.svg";

const Resources = () => {
  const resources = resourcesData.resources;
  const imgs = [brImg, drImg, fcImg];

  return (
    <section className="bg-gray-100 pb-32">
      <div className="w-5/6 2xl:w-4/6 mx-auto pt-32">
        <div className="text-center lg:w-1/2 mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-black ">
            Advanced Statistics
          </h2>
          <p className="pt-4 text-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center gap-16 lg:gap-6 pt-16 z-10 w-full">
          <hr className="absolute border-b-4 border-cyan-400 w-[600px] bottom-1/2  rotate-90 lg:rotate-0 lg:h-0 lg:w-full lg:top-2/3 lg:left-0 -z-10"/>
          {resources.map((r, index) => {
            return (
              <ResourceCard
                key={index}
                margin={index*80}
                title={r.title}
                copy={r.copy}
                img={imgs[index]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
