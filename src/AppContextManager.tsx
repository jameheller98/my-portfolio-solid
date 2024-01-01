import { ParentProps } from "solid-js";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function AppContextManager(props: ParentProps) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}
