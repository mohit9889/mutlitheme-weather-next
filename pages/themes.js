import React from "react";
import { changeTheme } from "~/utils/themeChange";
import { themeColors } from "~/constants/themeColors";
import { useThemes } from "~/context/themesContext";

const THEMES = ["light", "dark", "blue", "orange", "purple"];

const Themes = () => {
  const { changeThemeContext, themeMode } = useThemes();
  return (
    <div className="p-[20px]">
      <div className="rounded-lg bg-secondary px-[10px] py-[5px] shadow-sm capitalize w-max">
        <span>Current Theme: {themeMode}</span>
      </div>
      <div className="flex flex-col mt-8">
        <h4 className=" text-xl font-bold mb-4">Available Themes</h4>
        <div className="flex flex-col gap-2">
          {THEMES.map(
            (theme, index) =>
              themeMode !== theme && (
                <div key={index} className="capitalize cursor-pointer">
                  <div className="flex ">
                    <span
                      className="mr-4 min-w-[60px] hover:underline"
                      onClick={() => {
                        changeTheme(theme);
                        changeThemeContext(theme);
                      }}
                    >
                      {theme}
                    </span>
                    <span className="flex items-center justify-center mr-4">
                      <span
                        className={`h-[10px] w-[10px] block mr-1`}
                        style={{
                          backgroundColor: themeColors[theme].primary,
                        }}
                      ></span>{" "}
                      Primary
                    </span>
                    <span className="flex items-center justify-center mr-4">
                      <span
                        className={`h-[10px] w-[10px] block mr-1`}
                        style={{
                          backgroundColor: themeColors[theme].secondary,
                        }}
                      ></span>{" "}
                      Secondary
                    </span>
                    <span className="flex items-center justify-center mr-4">
                      <span
                        className={`h-[10px] w-[10px] block mr-1`}
                        style={{
                          backgroundColor: themeColors[theme].typography,
                        }}
                      ></span>{" "}
                      Typography
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Themes;
