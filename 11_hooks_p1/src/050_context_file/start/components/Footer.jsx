import { useUpdateTheme } from "../context/ThemeContext";
const Footer = () => {
  console.log("footer");
  const setValue = useUpdateTheme();
  return (
    <footer>
      <div>Footer</div>
    </footer>
  );
};
export default Footer;
