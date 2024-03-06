import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const themeList = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <details>
      <summary>Theme</summary>
      <ul className="p-2">
        {themeList.map((theme) => (
          <li key={theme}>
            <button
              data-set-theme={theme}
              data-act-class="ACTIVECLASS">
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ThemeChanger;
