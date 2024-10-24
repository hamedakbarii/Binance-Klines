import { BigCloud, LargeCloud, SmallCloud } from "./icons";

const LightThemeButton = () => {
  return (
    <div className="w-full h-full bg-gradient-to-tr from-[#77C2D0] to-[#3D91A7] p-1 flex items-center justify-between ltr animate-appear">
      <div className="relative w-5 h-5 flex-shrink-0 animate-floating">
        <div className="absolute w-full h-full top-0 left-0 rounded-full bg-gradient-to-br from-[#FFF500] to-[#FFC700]"></div>
        <div className="absolute w-full h-full top-0 left-0 rounded-full bg-gradient-to-br from-[#FFF500] to-[#FFC700] blur-[2px]"></div>
      </div>
      <div className="flex flex-col gap-0.5 items-center">
        <LargeCloud />
        <BigCloud />
      </div>
      <SmallCloud />
    </div>
  );
};

export default LightThemeButton;
