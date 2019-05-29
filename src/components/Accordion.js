import React from "react";
import styles from "./Accordion.module.css";

/**
 * Accordion according to Accordion Design Pattern in WAI-ARIA Authoring Practices 1.1
 * see https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
 *
 * Keyboard Support:
 *
```
Space or Enter
  👍 When focus is on the accordion header of a collapsed section, expands the section.
Tab
  👍 Moves focus to the next focusable element.
  👍 All focusable elements in the accordion are included in the page Tab sequence.
Shift + Tab
  👍 Moves focus to the previous focusable element.
  👍 All focusable elements in the accordion are included in the page Tab sequence.
Down Arrow
  👎 When focus is on an accordion header, moves focus to the next accordion header.
  👎 When focus is on last accordion header, moves focus to first accordion header.
Up Arrow
  👎 When focus is on an accordion header, moves focus to the previous accordion header.
  👎 When focus is on first accordion header, moves focus to last accordion header.
Home
  👎 When focus is on an accordion header, moves focus to the first accordion header.
End
  👎 When focus is on an accordion header, moves focus to the last accordion header.
```
 */
export const Accordion = ({ children }) => (
  <div className={styles.Accordion}>{children}</div>
);
