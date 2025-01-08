import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import { RootState } from "../store/store";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    </button>
  );
};

export default ThemeToggle;
