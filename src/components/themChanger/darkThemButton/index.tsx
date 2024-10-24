import { Moon } from "./icons";

const DarkThemeButton = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-tr from-[#041326] to-[#0E314C] p-1 flex items-center justify-between animate-appear">
      <div className="w-full h-full relative z-[+1]">
        <span className="w-px h-px block absolute right-5 top-2.5 bg-white rounded-full"></span>
        <span className="w-px h-px block absolute left-4 top-4 bg-white rounded-full"></span>
        <span className="w-px h-px block absolute left-1 top-1 bg-white rounded-full"></span>
        <span className="w-px h-px block absolute left-5 top-0 bg-white rounded-full"></span>
        <span className="w-px h-px block absolute right-2 bottom-1 bg-white rounded-full"></span>
        <span className="w-px h-px block absolute right-1 top-1 bg-white rounded-full"></span>
      </div>
      <div className="absolute w-16 h-14 -left-6 -bottom-10 rounded-full bg-gradient-to-t from-[#151F25] to-[#0C2F45]"></div>

      <div className="relative w-5 h-5 flex-shrink-0 animate-floating">
        <div className="absolute w-full h-full top-0 left-0 z-[+1]">
          <Moon />
        </div>
        <div className="absolute w-full h-full top-0 left-0 rounded-full bg-white blur-[2px]"></div>
      </div>
    </div>
  );
};

export default DarkThemeButton;
