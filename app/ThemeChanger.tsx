import { useEffect } from "react";
import { themeChange } from "theme-change";

function titleCase(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const themeList = [
    "light",
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "aqua",
    "coffee",
  ];

  return (
    <details>
      <summary>Theme</summary>
      <ul className="p-2 z-10">
        {themeList.map((theme) => (
          <li key={theme}>
            <button
              data-set-theme={theme}
              data-act-class="ACTIVECLASS">
              {titleCase(theme)}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ThemeChanger;
