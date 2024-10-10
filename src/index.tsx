/* @refresh reload */
import { render } from "solid-js/web";
import "./components/SlottedElement";
import "./components/MyComponent";
import "./components/AdvancedComponent";
import "./components/NoShadowComponent";

function App() {
  return (
    <div>
      <h1>Slotted Element Demo</h1>
      <slotted-element>
        <p>And this is everything else</p>
        <ul slot="footer">
          <li>This is the footer</li>
        </ul>
        <h1 slot="header">This is the header</h1>
      </slotted-element>
    </div>
  );
}

render(() => <App />, document.getElementById("root") as HTMLElement);
