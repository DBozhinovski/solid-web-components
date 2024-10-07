import { register, compose } from "component-register";
import { withSolid } from "solid-element";

compose(
  register("advanced-component", { data: "Default data" }),
  withSolid
)((props) => {
  return <div>Advanced component with data: {props.data}</div>;
});

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "advanced-component": { data: string };
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "advanced-component": { data: string };
  }
}
