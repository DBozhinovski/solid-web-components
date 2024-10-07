/* @refresh reload */
import { render } from "solid-js/web";
import "./components/MyComponent";
import "./components/AdvancedComponent";
import "./components/NoShadowComponent";

function App() {
  return (
    <div>
      <h1>My Solid Elements App</h1>
      <my-component message="Custom message"></my-component>
      <advanced-component data="component data here"></advanced-component>
      <no-shadow-component text="no shadow dom data here"></no-shadow-component>
    </div>
  );
}

render(() => <App />, document.getElementById("root") as HTMLElement);
