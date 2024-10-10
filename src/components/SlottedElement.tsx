import { createEffect, createSignal } from "solid-js";
import { useSlots } from "../utils/useSlots";
import { customElement, noShadowDOM } from "solid-element";

customElement("slotted-element", {}, (props, { element }) => {
  noShadowDOM();
  const [containerRef, setContainerRef] = createSignal<HTMLElement | null>(
    null
  );

  createEffect(() => {
    useSlots(containerRef);
  }, [containerRef]);

  return (
    <div ref={setContainerRef}>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  );
});

// Update type declarations
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "slotted-element": {};
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "slotted-element": HTMLElement & {};
  }
}
