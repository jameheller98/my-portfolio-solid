import { ParentComponent } from "solid-js";
import { useTheme } from "../../contexts/ThemeContext";
import Toggle from "../../components/Toggle/Toggle";
import layoutCommonStyles from "./layout-common.module.css";
import Navbar from "../../components/Navbar/Navbar";

const LayoutCommon: ParentComponent = ({ children }) => {
  const { theme, changeTheme } = useTheme();

  const handleToggleTheme = (value: boolean) => {
    if (value === false) {
      changeTheme("light");
    } else {
      changeTheme("dark");
    }
  };

  return (
    <>
      <div class={layoutCommonStyles.header}>
        <Navbar />
        <Toggle
          value={theme() === "dark"}
          onToggle={handleToggleTheme}
          CustomIndicator={CustomIndicator}
          gap={0}
        />
      </div>
      {children}
    </>
  );
};

const CustomIndicator = () => {
  const { theme } = useTheme();

  return (
    <span class={layoutCommonStyles["toggle-indicator"]}>
      {theme() === "dark" ? (
        <i class={`fa-solid fa-moon ${layoutCommonStyles.moon}`} />
      ) : (
        <i class={`fa-solid fa-sun ${layoutCommonStyles.sun}`} />
      )}
    </span>
  );
};

export default LayoutCommon;
