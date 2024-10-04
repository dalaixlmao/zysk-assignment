import Title from "./Title";
import Screen1 from "../assets/3_2 screen mockup(1).svg";
import Screen2 from "../assets/iPhone12Promockup.svg";
import { features } from "../store";
import { useEffect, useState } from "react";
import Feature from "./Page2/Feature";
import FeatureType from "../store";
import rightArrow from "../assets/rightIcon.svg";

export default function Feature1() {
  const [f, setF] = useState<FeatureType[]>([]);
  useEffect(() => {
    const ff = [];
    for (let i = 0; i < 3; i++) ff.push(features[i]);
    setF(ff);
  }, [features]);
  return (
    <div className="flex flex-col mt-12 text-center items-center">
      <div className="px-2 text-xs py-1 bg-purple-100 text-purple-500 border rounded-full border-purple-300">
        Features
      </div>
      <div className="mt-3">
        <Title
          text="Cutting-edge features for advanced analytics"
          description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        />
      </div>
      <div className=" w-full flex flex-col items-center">
        <div className="relative flex flex-col items-center mt-12">
          <img className="md:block hidden ml-24" src={Screen1} />
          <img
            className="md:block hidden md:absolute md:bottom-10 left-0 md:h-auto h-[300px]"
            src={Screen2}
          />
          <div
            className="md:hidden block w-[250px] h-[350px] md:bottom-10 left-0 md:h-auto"
            style={{
              background: `url(${Screen2})`,
              content: "fit",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="md:w-4/5 grid md:grid-cols-3 grid-cols-1 mt-10">
        {f.map((el, index) => {
          return (
            <div className="mt-10" key={index}>
              <div className="md:h-48">
                <Feature
                  icon={el.icon}
                  title={el.title}
                  description={el.description}
                />
              </div>
              <div className="md:mt-3 text-purple-500 font-semibold flex flex-row items-center justify-center cursor-pointer">
                Learn More <img className="ml-2" src={rightArrow} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
