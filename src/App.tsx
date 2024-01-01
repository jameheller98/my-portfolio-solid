import { ParentProps } from "solid-js";
import LayoutCommon from "./layouts/LayoutCommon/LayoutCommon";
import AppContextManager from "./AppContextManager";

function App(props: ParentProps) {
  return (
    <AppContextManager>
      <LayoutCommon>{props.children}</LayoutCommon>
    </AppContextManager>
  );
}

export default App;
