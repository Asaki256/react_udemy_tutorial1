import { useTheme, useUpdateTheme } from "../context/ThemeContext";

const Header = () => {
  console.log("header");
  const theme = useTheme();
  const setTheme = useUpdateTheme();
  const changeTheme = (e) => setTheme(e.target.value);
  const THEMES = ["light", "dark", "red"];
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input type="radio" value={_theme} checked={_theme === theme} onChange={changeTheme} />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
