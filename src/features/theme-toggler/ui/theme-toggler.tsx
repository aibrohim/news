import { FC } from "react";

import { useTheme } from "shared/config";

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useTheme();

  const handleTogglerClick = () => toggleTheme();

  return <button onClick={handleTogglerClick}>Toggle Theme</button>;
};
