import { customElement } from "solid-element";

customElement("my-component", { message: "Hello, World!" }, (props) => {
  return (
    <div>
      <h1>{props.message}</h1>
      <p>This is a custom web component built with solid-element.</p>
    </div>
  );
});

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "my-component": { message: string };
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": { message: string };
  }
}
