import { useRouter } from "next/router";
import { useThemes } from "~/context/themesContext";
import Image from "next/image";
import Link from "next/link";
import WeatherSvg from "~/public/svg/sidebar/weather.svg";
import CitiesSvg from "~/public/svg/sidebar/locations.svg";
import SettingSvg from "~/public/svg/sidebar/settings.svg";
import ThemeSvg from "~/public/svg/sidebar/theme.svg";

const SideNav = () => {
  const { themeMode } = useThemes();
  const { asPath } = useRouter();
  const LINKS = [
    { path: "/", title: "Weather", icon: <WeatherSvg /> },
    { path: "/cities", title: "Cities", icon: <CitiesSvg /> },
    { path: "/settings", title: "Settings", icon: <SettingSvg /> },
    { path: "/themes", title: "Themes", icon: <ThemeSvg /> },
  ];

  return (
    <div className="p-[20px]">
      <aside className="flex h-full p-[10px] flex-col items-center rounded-lg bg-secondary shadow-lg">
        <Image src="/img/umbrella.png" height={35} width={35} alt="logo" />
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          {LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center flex-col group relative rounded-xl  p-2 hover:bg-primary ${
                asPath === link.path ? "bg-primary" : ""
              }`}
            >
              <span
                className={`icon ${themeMode === "light" ? "" : "icon-white"} `}
              >
                {link.icon}
              </span>
              <span className="mt-1 text-xs">{link.title}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideNav;
