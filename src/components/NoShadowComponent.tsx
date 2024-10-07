import { customElement, noShadowDOM } from "solid-element";

customElement("no-shadow-component", { text: "No Shadow DOM" }, (props) => {
  noShadowDOM();
  return <p>{props.text}</p>;
});

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "no-shadow-component": { text: string };
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "no-shadow-component": { text: string };
  }
}
