export function useSlots(containerRef: () => HTMLElement | null) {
  const container = containerRef();
  if (!container) return;
  const parent = container.parentElement;
  if (!parent) return;

  // Store removed elements
  const removedElements: HTMLElement[] = [];

  // 1. Find all elements in the parent except the container
  const elementsToHide = Array.from(parent.children).filter(
    (el) => el !== container
  ) as HTMLElement[];

  // 2. Remove and store elements
  elementsToHide.forEach((el) => {
    parent.removeChild(el);
    removedElements.push(el);
  });

  // 3. Find the slots in the container
  const slots = container.querySelectorAll("slot");
  const defaultSlot = Array.from(slots).find(
    (slot) => !slot.getAttribute("name")
  );

  // 4. Match named slots and move elements
  slots.forEach((slot) => {
    const slotName = slot.getAttribute("name");
    if (slotName) {
      const matchingElement = removedElements.find(
        (el) => el.getAttribute("slot") === slotName
      );
      if (matchingElement) {
        slot.replaceWith(matchingElement);
        removedElements.splice(removedElements.indexOf(matchingElement), 1);
      }
    }
  });

  // 5. Handle default slot
  if (defaultSlot) {
    const replacementContainer = document.createElement("div");
    removedElements.forEach((el) => {
      if (!el.getAttribute("slot")) {
        replacementContainer.appendChild(el);
      }
    });
    defaultSlot.replaceWith(replacementContainer);
  }

  // Return a function to restore the original structure if needed
  return () => {
    // Remove slotted elements from their current positions
    removedElements.forEach((el) => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    // Restore original elements to parent
    removedElements.forEach((el) => {
      parent.insertBefore(el, container);
    });

    // Restore slots
    container.querySelectorAll("slot").forEach((slot) => {
      const slotName = slot.getAttribute("name");
      const originalSlot = document.createElement("slot");
      if (slotName) {
        originalSlot.setAttribute("name", slotName);
      }
      slot.replaceWith(originalSlot);
    });
  };
}
