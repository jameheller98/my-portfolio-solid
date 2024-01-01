import {
  createSignal,
  createContext,
  useContext,
  ParentProps,
  createEffect,
  Accessor,
} from "solid-js";

type TTheme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Accessor<TTheme>;
  changeTheme: (_: TTheme) => void;
}>({
  theme: (): TTheme => "dark",
  changeTheme: (_: TTheme) => {},
});

export function ThemeProvider(props: ParentProps) {
  const [theme, setTheme] = createSignal<TTheme>(
      (window.localStorage.getItem("theme") as TTheme) ?? "light"
    ),
    value = {
      theme,
      changeTheme: (theme: TTheme) => {
        window.localStorage.setItem("theme", theme);
        setTheme(theme);
      },
    };

  createEffect(() => {
    const root = document.documentElement;

    root.setAttribute("color-schema", theme());
  });

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
